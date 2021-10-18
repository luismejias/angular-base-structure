import { HttpClient } from '@angular/common/http';
import { fakeAsync } from '@angular/core/testing';
import { MockService } from 'ng-mocks';
import { HeroeService } from './heroe.service';

describe('HeroeService', () => {
  let service: HeroeService;
  let http: HttpClient;
  beforeEach(() => {
    http =  MockService(HttpClient);
    service = new HeroeService(http);
  });

  it('should be created', fakeAsync(() => {
    expect(service).toBeTruthy();
  }));
});
