import { Injectable } from '@angular/core';
import { db } from '../../configs/db';
import { Card } from '../../models/Card';

@Injectable({
  providedIn: 'root',
})
export class CardQueriesService {
  constructor() {}

  async addItem(card: Card) {
    await db.cards.add(card);
  }

  async findAll() {
    return db.cards.toArray();
  }
}
