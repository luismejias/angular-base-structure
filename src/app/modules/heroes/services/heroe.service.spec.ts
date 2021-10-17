import { HttpClient } from '@angular/common/http';
import { MockService } from 'ng-mocks';
import { HeroeService } from './heroe.service';

describe('HeroeService', () => {
  let service: HeroeService;
  let http: HttpClient;
  beforeEach(() => {
    http =  MockService(HttpClient);
    service = new HeroeService(http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
