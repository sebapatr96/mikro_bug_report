import { defineConfig } from '@mikro-orm/core';
import { Migrator } from '@mikro-orm/migrations';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

export const config = defineConfig<PostgreSqlDriver>({
  driver: PostgreSqlDriver,
  entities: ['./src/entities'], // path to our TS entities (src), relative to `baseDir`
  dbName: 'mikro_dev_1',
  host: 'localhost',
  port: 5432,
  user: 'test',
  password: 'test',
  migrations: {
    tableName: 'migrations',
    // path: `./src/migrations`,
    pathTs: `./src/migrations`,
    glob: '+([A-Za-z0-9]|-)+([0-9]).{ts,js}',
    transactional: true,
    disableForeignKeys: false, // Disabled until its needed, because it requires superuser
    allOrNothing: true, // wrap all migrations in master transaction
    dropTables: true, // allow or disable table dropping
    safe: false, // allow or disable table and column dropping
    emit: 'ts', // migration generation mode
    snapshotName: '.snapshot-datapacket',
  },
  extensions: [Migrator],
})