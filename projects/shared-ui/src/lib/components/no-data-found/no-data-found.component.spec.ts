import { fakeAsync } from '@angular/core/testing';
import { NoDataFoundComponent } from './no-data-found.component';

describe('NoDataFoundComponent', () => {
  let component: NoDataFoundComponent;

  beforeEach(() => {
    component = new NoDataFoundComponent();
  });

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();
  }));
});
