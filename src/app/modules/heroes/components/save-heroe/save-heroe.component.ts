import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
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
  selector: 'app-save-heroe',
  templateUrl: './save-heroe.component.html',
  styleUrls: ['./save-heroe.component.scss'],
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
export class SaveHeroeComponent implements OnInit {
  saveHeroeForm: FormGroup;
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
		private dialogRef: MatDialogRef<SaveHeroeComponent>,
    private imageService: ImageService,
		@Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.saveHeroeForm = this.fb.group({
			name: [
				'',
				Validators.compose([
					Validators.maxLength(50),
					Validators.minLength(2),
					Validators.required,
				]),
			],
			biography: ['',
        Validators.compose([
					Validators.minLength(2),
					Validators.required,
				]),
			],
      appearance: ['', Validators.required],
			image: [''],
			house: [
				'',	Validators.compose([Validators.required]),
			],
		});
  }

  ngOnInit(): void {}

  get biography() {
    return this.saveHeroeForm.get('biography');
  }

  get name() {
    return this.saveHeroeForm.get('name');
  }

  get appearance() {
    return this.saveHeroeForm.get('appearance');
  }

  get image() {
    return this.saveHeroeForm.get('image');
  }

  get house() {
    return this.saveHeroeForm.get('name');
  }

  save() {
    let id = 12;
    id++;
    let idAux = id.toString();
    const { name, biography, appearance, house } = this.saveHeroeForm.value;
		const heroe: Heroe = makeHeroe({
			id: idAux,
			image: this.previewUrl,
			name,
      biography,
      appearance: appearance.toISOString(),
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

}
