import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenDialogComponent } from 'src/app/components/open-dialog/open-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog():void{
    const dialogRef = this.dialog.open(OpenDialogComponent, {
      width: '300px',
      height: '300px',
    });
  }

}
