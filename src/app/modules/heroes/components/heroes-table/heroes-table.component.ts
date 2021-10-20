import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.scss']
})
export class HeroesTableComponent implements OnInit {
  @Input() dataSource = new MatTableDataSource<Heroe>([]);
  @Output() handleDataEdit = new EventEmitter();
  @Output() handleDataDelete = new EventEmitter(); 

  displayedColumns: string[] = ['id', 'name', 'biography', 'image', 'appearance', 'house', 'edit', 'delete'];
  isLoadingResults: boolean = true;
  isRateLimitReached: boolean = false;
  resultsLength: number = 0;
  originalDataSource = new MatTableDataSource<Heroe>([]);
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  subscription = new Subscription();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onEditClick(heroe: Heroe) {
		this.handleDataEdit.emit(heroe);
	}

  onDeleteClick(id: string) {
		this.handleDataDelete.emit(id);
	}

}
