import Dexie, { Table } from 'dexie';
import { Card } from '../models/Card';

export class AppDB extends Dexie {
  cards!: Table<Card, number>;

  constructor() {
    super('cards');
    this.version(5).stores({
      cards: '++id',
    });
  }
}

export const db = new AppDB();
