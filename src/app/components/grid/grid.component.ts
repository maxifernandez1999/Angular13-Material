import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor() { }
  tiles: any[] = [
    {text: 'One', cols: 2, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  ngOnInit(): void {
  }

}
