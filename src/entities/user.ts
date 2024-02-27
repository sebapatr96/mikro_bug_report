import { BaseEntity, Entity, ManyToOne, PrimaryKey, Ref } from '@mikro-orm/core';
import { Location } from './location';

@Entity()
export class User extends BaseEntity {
  @PrimaryKey()
  readonly id: number;

  @ManyToOne(() => Location, { ref: true })
  location: Ref<Location>;
}
