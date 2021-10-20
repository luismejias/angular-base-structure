import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Heroe } from '../../models/heroe.model';
import { HeroeService } from '../../services/heroe.service';
import { DeleteHeroeComponent } from '../delete-heroe/delete-heroe.component';
import { EditHeroeComponent } from '../edit-heroe/edit-heroe.component';
import { SaveHeroeComponent } from '../save-heroe/save-heroe.component';
@Component({
  selector: 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls: ['./heroes-page.component.scss']
})
export class HeroesPageComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource<Heroe>([]);
  originalDataSource = new MatTableDataSource<Heroe>([]);
  loadingData: boolean = true;
  searchForm: FormGroup;
  subscription = new Subscription();
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private fb: FormBuilder,
    private heroeService: HeroeService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {
    this.searchForm = this.fb.group({
      searchField: ['']
    });
  }

  ngOnInit(): void {
    this.searchFieldChanges();
    this.getHeroes();
  }

  searchFieldChanges() {
    this.searchForm.get('searchField').valueChanges.subscribe((value) => {
      this.filterHeroes(value);
    });
  }

  getHeroes() {
    this.loadingData = true;
    this.subscription.add(
      this.heroeService.getHeroes()
        .subscribe((res: Heroe[]) => {
          if (res)
            this.dataSource.data = res;
          this.originalDataSource.data = res;
          this.loadingData = false;
        })
    );
  }

  addHeroe(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = '';
    const dialogRef = this.dialog.open(
      SaveHeroeComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((heroeData) => {
      if (heroeData) {
        this.heroeService.addHeroe(heroeData);
        this.getHeroes();
      }
    });

  }

  editHeroe(heroeData: Heroe): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = heroeData ? heroeData : '';
    const dialogRef = this.dialog.open(
      EditHeroeComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((heroeData) => {
      if (heroeData) {
        this.heroeService.editHeroe(heroeData).subscribe((res) => {
          if (res) {
            this.snackBar.open('Datos del heroe actualizados!!!', 'cerrar');
            this.getHeroes();
          } else {
            this.snackBar.open('Ocurrio un error al realizar la operación!!!', 'cerrar');
          }
        });
      }
    });
  }

  deleteHeroe(heroeId: string) {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		const dialogRef = this.dialog.open(
			DeleteHeroeComponent,
			dialogConfig
		);

		dialogRef.afterClosed().subscribe((dataOnDelete) => {
			if (dataOnDelete.ok)
				this.heroeService.deleteHeroe(heroeId).subscribe((res) => {
          if (res){
            this.snackBar.open('Datos del heroe eliminados!!!', 'cerrar');
            this.getHeroes();
          } else
            this.snackBar.open('Ocurrio un error al realizar la operación!!!', 'cerrar');
				});
		});
	}

  get dataSourceLength(): boolean {
    return this.dataSource.data.length > 0;
  }

  filterHeroes(searching: string = ''): void {
    this.dataSource.data = this.originalDataSource.data.filter((heroe) => {
      return (
        heroe.name
          .toLowerCase()
          .includes(searching.toLowerCase() || '')
        || heroe.id.toString().includes(searching.toLowerCase() || '')
      );
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
