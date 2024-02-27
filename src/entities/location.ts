import { BaseEntity, Collection, Entity, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';

import { User } from './user';

@Entity()
export class Location extends BaseEntity {
  @PrimaryKey()
  readonly id: number;

  @Property()
  location: string;

  @OneToMany(() => User, x => x.location)
  users = new Collection<User>(this);
}
