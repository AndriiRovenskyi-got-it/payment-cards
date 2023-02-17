import { Card } from '../database/models/Card';

export interface CardListResponse {
  next: string;
  previous: string;
  results: Array<Card>;
}
