import { defineConfig } from '@mikro-orm/core';
import { Migrator } from '@mikro-orm/migrations';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { SeedManager } from '@mikro-orm/seeder';

export const config = defineConfig<PostgreSqlDriver>({
  driver: PostgreSqlDriver,
  entities: ['./src/entities'],
  dbName: 'mikro_dev_1',
  host: 'localhost',
  port: 5432,
  user: 'test',
  password: 'test',
  debug: true,
  migrations: {
    tableName: 'migrations',
    pathTs: `./src/migrations`,
    glob: '+([A-Za-z0-9]|-)+([0-9]).{ts,js}',
    transactional: true,
    disableForeignKeys: false,
    allOrNothing: true,
    dropTables: true,
    safe: false,
    emit: 'ts',
    snapshotName: '.snapshot',
  },
  seeder: {
    path: './seeders',
    pathTs: './src/seeders',
    defaultSeeder: 'DatabaseSeeder',
    glob: '!(*.d).{js,ts}',
    emit: 'ts',
    fileName: (className: string) => className,
  },
  extensions: [Migrator, SeedManager],
});
