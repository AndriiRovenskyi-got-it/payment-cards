import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardListResponse } from '../models/card-list-response.interface';

export const HTTP_URL = 'https://ca4n5do87vb.legrandmat.com';

@Injectable({
  providedIn: 'root',
})
export class GatewayService {
  private getCardsUrl = `${HTTP_URL}/v1/cards`;

  constructor(private http: HttpClient) {}

  getCards(cardsUrl = this.getCardsUrl): Observable<CardListResponse> {
    return this.http.get<CardListResponse>(cardsUrl);
  }
}
