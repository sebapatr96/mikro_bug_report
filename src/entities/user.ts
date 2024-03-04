import {
  BaseEntity,
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
  Ref,
} from '@mikro-orm/core';
import { Location } from './location';
import { Server } from './server';

@Entity()
export class User extends BaseEntity {
  @PrimaryKey()
  readonly id: number;

  @Property()
  name: string;

  @ManyToOne(() => Location, { ref: true })
  location: Ref<Location>;

  @OneToMany(() => Server, x => x.user)
  servers = new Collection<Server>(this);
}
