import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-heroe',
  templateUrl: './delete-heroe.component.html',
  styleUrls: ['./delete-heroe.component.scss']
})
export class DeleteHeroeComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteHeroeComponent>
  ) { }

  ngOnInit(): void {
  }

  delete() { 
		this.dialogRef.close({ ok: true });
	}

  close() {
		this.dialogRef.close({ ok: false });
	}


}
