import { MikroORM, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { User } from './entities/user';
import { config } from './mikro-config';

const start = async () => {
  console.log('Starting app...');

  const orm = await MikroORM.init<PostgreSqlDriver>(config);

  const migrator = orm.getMigrator();

  await migrator.createMigration();
  await migrator.up();

  await orm.em
    .fork()
    .createQueryBuilder(User, 'user')
    .clone()
    .where({
      location: {
        location: 'Frankfurt',
      },
    })
    .getResult();
};

start();
