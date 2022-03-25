import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OpenDialogComponent } from '../open-dialog/open-dialog.component';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  animal: string;
  name: string;

  ngOnInit(): void {
    
  }
  constructor(public dialog: MatDialog) {}


  openDialog(): void {
    //se especifica el dialog a abrir, puede estar en otro componente
    //y se le pasa la data
    const dialogRef = this.dialog.open(OpenDialogComponent, {
      width: '300px',
      height: '300px',
      data: {name: this.name, animal: this.animal},
    });


    //cuando se cierra el dialog, el observable devuelve los valores
    //que se modificaron en el modal
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
