import { Migration } from '@mikro-orm/migrations';

export class Migration20240227162755 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "server" ("id" serial primary key, "name" varchar(255) not null, "user_id" int not null);');

    this.addSql('alter table "server" add constraint "server_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "server" cascade;');
  }

}
