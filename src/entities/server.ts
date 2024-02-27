import { BaseEntity, Entity, ManyToOne, PrimaryKey, Property, Ref } from '@mikro-orm/core';
import { User } from './user';

@Entity()
export class Server extends BaseEntity {
  @PrimaryKey()
  readonly id: number;

  @Property()
  name: string;

  @ManyToOne(() => User, { ref: true })
  user: Ref<User>;
}
