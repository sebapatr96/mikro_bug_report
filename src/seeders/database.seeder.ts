import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Location } from '../entities/location';
import { Server } from '../entities/server';
import { User } from '../entities/user';

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const location = em.create(Location, {
      location: 'London',
    });

    const userA = em.create(User, {
      name: 'Peter Griffin',
      location,
    });

    em.create(User, {
      name: 'Homer Simpson',
      location,
    });

    em.create(User, {
      name: 'Walter White',
      location,
    });

    em.create(Server, {
      name: 'AB-1',
      user: userA,
    });

    em.create(Server, {
      name: 'AB-2',
      user: userA,
    });
  }
}
