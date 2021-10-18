import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageService } from '@bs-shared-ui';
import { HOUSES } from '../../constants/constants';
import { ImageError } from '../../models/heroe.model';

@Component({
  selector: 'app-save-heroe',
  templateUrl: './save-heroe.component.html',
  styleUrls: ['./save-heroe.component.scss']
})
export class SaveHeroeComponent implements OnInit {
  saveHeroeForm: FormGroup;
	image: any;
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
					Validators.pattern(/^[0-9a-zA-Z.-\w\s\u00f1 \u00d1]*$/),
					Validators.required,
				]),
			],
			biography: ['',
        Validators.compose([
					Validators.maxLength(50),
					Validators.minLength(2),
					Validators.pattern(/^[0-9a-zA-Z.-\w\s\u00f1 \u00d1]*$/),
					Validators.required,
				]),
			],
      appearance: ['', Validators.required],
			image: [''],
			house: [
				this.data.quantityAvailable,
				Validators.compose([
					Validators.maxLength(10),
					Validators.minLength(1),
					Validators.pattern('^[0-9]*$'),
					Validators.required,
				]),
			],
		});
  }

  ngOnInit(): void {
  }

  get biography() {
    return this.saveHeroeForm.get('biography');
  }

  get name() {
    return this.saveHeroeForm.get('name');
  }

  save() {
		this.dialogRef.close();
	}

  close() {
		this.dialogRef.close();
	}

  private fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.saveHeroeForm.get('profile').setValue(this.fileData);
  }

  private preview() {
    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }

  validateImage(obj: any): void {
    this.imageErrors = this.imageService.validateImage(obj);
    if (this.imageErrors.length <= 0) {
      this.fileProgress(obj);
      this.preview();
      this.isImage = true;
    } else {
      this.isImage = false;
      this.previewUrl = null;
    }
  }

}
