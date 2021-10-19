import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {
	DateAdapter,
	MAT_DATE_FORMATS,
	MAT_DATE_LOCALE,
} from '@angular/material/core';
import {
	MomentDateAdapter,
	MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageService } from '@bs-shared-ui';
import { HOUSES } from '../../constants/constants';
import { Heroe, ImageError, makeHeroe } from '../../models/heroe.model';

export const MY_FORMATS = {
	parse: {
		dateInput: 'DD/MM/YYYY',
	},
	display: {
		dateInput: 'DD/MM/YYYY',
		monthYearLabel: 'MMM YYYY',
		dateA11yLabel: 'LL',
		monthYearA11yLabel: 'DD/MM/YYYY',
	},
};
@Component({
  selector: 'app-edit-heroe',
  templateUrl: './edit-heroe.component.html',
  styleUrls: ['./edit-heroe.component.scss'],
  providers: [
		{
			provide: DateAdapter,
			useClass: MomentDateAdapter,
			deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
		},

		{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
		{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
	],
})
export class EditHeroeComponent implements OnInit {
  idHeroe: string = '';
  editHeroeForm: FormGroup;
	imageFinal: any;
	imageName: string;
	filePath: string;
  fileData: File = null;
  previewUrl: any = null;
	buttonDisabled = true;
  isImage: boolean = false;
  imageErrors: ImageError[] = [];
  public class = 'fa fa-upload';
  public houses = HOUSES
  constructor(
    private fb: FormBuilder,
		private dialogRef: MatDialogRef<EditHeroeComponent>,
    private imageService: ImageService,
		@Inject(MAT_DIALOG_DATA) public data: any
  ) {
    const { name, biography, appearance, house, image } = this.data;
    this.editHeroeForm = this.fb.group({
			name: [
				name,
				Validators.compose([
					Validators.maxLength(50),
					Validators.minLength(2),
					Validators.required,
				]),
			],
			biography: [biography,
        Validators.compose([
					Validators.minLength(2),
					Validators.required,
				]),
			],
      appearance: [appearance, Validators.required],
			image: [''],
			house: [
				house,	Validators.compose([Validators.required]),
			],
		});
  }

  ngOnInit() {
    this.idHeroe = this.data.id;
    this.setDefaultImage();
  }

  get biography() {
    return this.editHeroeForm.get('biography');
  }

  get name() {
    return this.editHeroeForm.get('name');
  }

  get appearance() {
    return this.editHeroeForm.get('appearance');
  }

  get image() {
    return this.editHeroeForm.get('image');
  }

  get house() {
    return this.editHeroeForm.get('name');
  }

  edit() {   
    const { name, biography, appearance, house } = this.editHeroeForm.value;
		const heroe: Heroe = makeHeroe({
			id: this.idHeroe,
			image: this.previewUrl,
			name,
      biography,
      appearance: appearance,
      house
		});
		this.dialogRef.close({
			...heroe
		});
	}

  close() {
		this.dialogRef.close();
	}

  validateImage(obj: any): void {
    this.imageErrors = this.imageService.validateImage(obj);
    if (this.imageErrors.length <= 0) {
      this.imageFinal = obj.target.files[0];
      this.buttonDisabled = false;
      const reader = new FileReader();
      reader.readAsDataURL(this.imageFinal);
      reader.onload = () => {
			  this.previewUrl = reader.result;
		  };

      const imageAux = this.imageFinal.name.split('.');
      this.imageName = `${imageAux[0]}_${
        new Date().getTime() + '.' + imageAux[1]
      }`;
      this.filePath = `/images/${imageAux[0]}_${
        new Date().getTime() + '.' + imageAux[1]
      }`;

      this.isImage = true;
    } else {
      this.isImage = false;
      this.previewUrl = null;
      this.buttonDisabled = true;
    }
  }

  setDefaultImage(){
    if (Object.values(this.data).length > 0) {
			this.previewUrl = this.data.image;
			if (!this.previewUrl)
				this.editHeroeForm.addControl(
					'image',
					new FormControl('', Validators.required)
				);
			else this.buttonDisabled = false;
		}
  }

}
