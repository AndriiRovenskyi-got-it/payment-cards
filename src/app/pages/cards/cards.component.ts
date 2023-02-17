import { Component, OnInit } from '@angular/core';
import { liveQuery } from 'dexie';
import { Card } from '../../database/models/Card';
import { CardQueriesService } from '../../database/services/card-queries/card-queries.service';
import { Column } from '../../models/column.interface';
import { GatewayService } from '../../services/gateway.service';
import { CardListResponse } from '../../models/card-list-response.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  public title = 'Cards';
  dataSource: CardListResponse;
  nextDataSource: CardListResponse;
  public columns: Array<Column> = [
    {
      columnDef: 'id',
      header: 'Id',
      cell: (element: Card) =>
        `${element.cardId ? element.cardId : element.id}`,
    },
    {
      columnDef: 'first_name',
      header: 'First name',
      cell: (element: Card) => `${element.first_name}`,
    },
    {
      columnDef: 'last_name',
      header: 'Last name',
      cell: (element: Card) => `${element.last_name}`,
    },
    {
      columnDef: 'card_number',
      header: 'Card number',
      cell: (element: Card) => element.card_number,
    },
    {
      columnDef: 'exp_month',
      header: 'Exp month',
      cell: (element: Card) => element.exp_month,
    },
    {
      columnDef: 'exp_year',
      header: 'Exp year',
      cell: (element: Card) => `${element.exp_year}`,
    },
    {
      columnDef: 'cvv',
      header: 'Cvv',
      cell: (element: Card) => element.cvv,
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (element: Card) => element.status,
    },
  ];
  displayedColumns = this.columns.map((c) => c.columnDef);
  isLastPage = false;

  constructor(
    private cardQueries: CardQueriesService,
    private gatewayService: GatewayService
  ) {}

  ngOnInit(): void {
    this.gatewayService.getCards().subscribe((cards) => {
      this.dataSource = cards;
    });
  }

  cards$ = liveQuery(() => {
    return this.cardQueries.findAll();
  });

  onTableScroll(event) {
    const currentPosition = event.target.scrollTop + event.target.offsetHeight;
    const maxPosition = event.target.scrollHeight;
    if (Math.ceil(currentPosition) == maxPosition && !this.isLastPage) {
      this.gatewayService.getCards(this.dataSource.next).subscribe((cards) => {
        this.isLastPage = !cards.next;
        this.dataSource.next = cards.next;
        this.nextDataSource = cards;
        this.dataSource.results = this.dataSource.results.concat(
          this.nextDataSource.results
        );
      });
    }
  }

  onPin(card: Card) {
    this.cardQueries.addItem({
      cardId: card.id,
      first_name: card.first_name,
      last_name: card.last_name,
      card_number: card.card_number,
      exp_month: card.exp_month,
      exp_year: card.exp_year,
      cvv: card.cvv,
      pinned: card.pinned,
      status: card.status,
    });
  }
}
