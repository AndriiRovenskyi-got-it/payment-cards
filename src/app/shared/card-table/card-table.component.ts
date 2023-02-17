import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Card } from '../../database/models/Card';
import { Column } from '../../models/column.interface';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss'],
})
export class CardTableComponent implements OnInit, OnChanges {
  @Input() cardsFromIndexedDB: Array<Card>;
  @Input() dataSource: Array<Card>;
  @Input() displayedColumns;
  @Input() columns: Array<Column>;
  @Output() pinCard: EventEmitter<Card> = new EventEmitter<Card>();
  @Output() tableScroll: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['cardsFromIndexedDB']?.currentValue ||
      changes['dataSource']?.currentValue
    ) {
      this.filterPinnedCards();
    }
  }

  ngOnInit(): void {}

  filterPinnedCards() {
    if (this.cardsFromIndexedDB && this.dataSource) {
      const cardsReverse = [...this.cardsFromIndexedDB].reverse();
      const cardIds = cardsReverse.map((card) => card.cardId);
      const filteredCards = this.dataSource.filter((card) => {
        return !cardIds.includes(card.cardId ? card.cardId : card.id);
      });
      filteredCards.unshift(...cardsReverse);
      this.dataSource = filteredCards;
    }
  }

  onTableScroll(tableScrollEvent) {
    this.tableScroll.emit(tableScrollEvent);
  }

  onPin(pinned: Card) {
    pinned.pinned = true;
    this.pinCard.emit(pinned);
  }
}
