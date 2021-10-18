import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'su-modal-generic',
  templateUrl: './modal-generic.component.html',
  styleUrls: ['./modal-generic.component.scss']
})
export class ModalGenericComponent {
  constructor(
    private dialogRef: MatDialogRef<ModalGenericComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  close() {
		this.dialogRef.close();
	}
}
