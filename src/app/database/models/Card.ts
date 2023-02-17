export interface Card {
  id?: number;
  cardId: number;
  first_name: string;
  last_name: string;
  card_number: string;
  exp_month: string;
  exp_year: string;
  cvv: string;
  status: string;
  pinned?: boolean;
}
