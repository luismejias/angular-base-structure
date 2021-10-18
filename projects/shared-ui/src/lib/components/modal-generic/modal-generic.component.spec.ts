
import { fakeAsync } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { MockService } from 'ng-mocks';
import { ModalGenericComponent } from './modal-generic.component';

describe('ModalGenericComponent', () => {
  let component: ModalGenericComponent;
  const mockDialogRef = MockService<MatDialogRef<ModalGenericComponent>>(MatDialogRef);  
  beforeEach( () => {
    const data: any [] = []
    component = new ModalGenericComponent(mockDialogRef, data);
  });

  it('should create', fakeAsync(() => {
    expect(component).toBeTruthy();
  }));
});
