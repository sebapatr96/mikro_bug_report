import { Migration } from '@mikro-orm/migrations';

export class Migration20240227111605 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "location" ("id" serial primary key, "location" varchar(255) not null);');

    this.addSql('create table "user" ("id" serial primary key, "location_id" int not null);');

    this.addSql('alter table "user" add constraint "user_location_id_foreign" foreign key ("location_id") references "location" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" drop constraint "user_location_id_foreign";');

    this.addSql('drop table if exists "location" cascade;');

    this.addSql('drop table if exists "user" cascade;');
  }

}
