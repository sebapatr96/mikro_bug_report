import { MikroORM, PopulateHint, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { User } from './entities/user';
import { config } from './mikro-config';

const start = async () => {
  console.log('Starting app...');

  const orm = await MikroORM.init<PostgreSqlDriver>(config);

  const migrator = orm.getMigrator();

  await migrator.createMigration();
  await migrator.up();

  await orm.em.fork().find(
    User,
    {
      servers: {
        $every: {
          name: {
            $ne: 'test',
          },
        },
      },
    },
    {
      populate: ['servers'],
      populateWhere: PopulateHint.INFER,
    },
  );
};

start();
