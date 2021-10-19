import { SaveHeroeComponent } from './save-heroe.component';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ImageService } from '@bs-shared-ui';
import { MockService } from 'ng-mocks';

describe('SaveHeroeComponent', () => {
  let formBuilder: FormBuilder;
  let dialogRef: MatDialogRef<SaveHeroeComponent>;
  let imageService: ImageService;
  let component: SaveHeroeComponent;
  let data: any;
  beforeEach( () => {
    formBuilder = MockService(FormBuilder);
    dialogRef = MockService(MatDialogRef);
    imageService = MockService(ImageService);
   component = new SaveHeroeComponent(formBuilder, dialogRef, imageService, data);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
