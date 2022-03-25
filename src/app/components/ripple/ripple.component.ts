import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.scss']
})
export class RippleComponent implements OnInit {

  constructor() { }
  @Input('html') html:string;
  @Input('name') name:string;
  centered = false;
  disabled = false;
  unbounded = false;
  radius: number;
  color: string;
  ngOnInit(): void {
  }

}
