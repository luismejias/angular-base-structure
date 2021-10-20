import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ImageService } from '@bs-shared-ui';
import { MockService } from 'ng-mocks';
import { Heroe, makeHeroe } from '../../models/heroe.model';
import { EditHeroeComponent } from './edit-heroe.component';

describe('EditHeroeComponent', () => {
  let component: EditHeroeComponent;
  let formBuilder: FormBuilder;
	let dialogRef: MatDialogRef<EditHeroeComponent>;
  let imageService: ImageService;
  let data: Heroe = makeHeroe({});
  beforeEach( () => {
    formBuilder = MockService(FormBuilder);
    dialogRef = MockService(MatDialogRef);
    imageService = MockService(ImageService);
    component = new EditHeroeComponent(formBuilder, dialogRef, imageService, data);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
