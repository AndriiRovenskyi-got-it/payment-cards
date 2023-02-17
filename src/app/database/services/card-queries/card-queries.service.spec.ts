import { TestBed } from '@angular/core/testing';

import { CardQueriesService } from './card-queries.service';

describe('CardQueriesService', () => {
  let service: CardQueriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardQueriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
