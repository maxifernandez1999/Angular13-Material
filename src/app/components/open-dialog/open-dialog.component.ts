import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-open-dialog',
  templateUrl: './open-dialog.component.html',
  styleUrls: ['./open-dialog.component.scss']
})
export class OpenDialogComponent implements OnInit {

  //la informacion de MAT_DIALOG_DATA guarda informacion que se comparte entre componentes
  constructor(
    public dialogRef: MatDialogRef<OpenDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name:string, animal:string},
  ) {}
  nameControl = new FormControl('', Validators.required);
  ngOnInit(): void {
    
  }
  //cierra el modal
  onNoClick(): void {
    this.dialogRef.close();
  }

}
