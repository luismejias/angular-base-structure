import { DeleteHeroeComponent } from './delete-heroe.component';
import { MockService } from 'ng-mocks';
import { MatDialogRef } from '@angular/material/dialog';

describe('DeleteHeroeComponent', () => {
  let component: DeleteHeroeComponent;
  let matDialogRef: MatDialogRef<DeleteHeroeComponent>;
  beforeEach(async () => {
    matDialogRef = MockService(MatDialogRef);
    component = new DeleteHeroeComponent(matDialogRef);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('delete', () => {
    it('should delete', () => {
      const spy = jest.spyOn(matDialogRef, 'close');
      component.delete();
      expect(spy).toHaveBeenCalled();
    })
  });

  describe('delete', () => {
    it('should delete', () => {
      const spy = jest.spyOn(matDialogRef, 'close');
      component.close();
      expect(spy).toHaveBeenCalled();
    })
  });
});
