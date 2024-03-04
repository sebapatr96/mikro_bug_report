import { MikroORM, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { User } from './entities/user';
import { config } from './mikro-config';

const start = async () => {
  console.log('Starting app...');

  const orm = await MikroORM.init<PostgreSqlDriver>(config);

  const migrator = orm.getMigrator();

  await migrator.createMigration();
  await migrator.up();

  const result = await orm.em
    .fork()
    .createQueryBuilder(User)
    .select('*')
    .leftJoin('servers', 's')
    .limit(1)
    .getResultAndCount();

  console.log(result);
};

start();
