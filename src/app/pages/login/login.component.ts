import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  multiple=true;
  accept="image/png, image/jpeg"
  color: ThemePalette = 'primary';
  nameControl = new FormControl('', Validators.required);
  dniControl = new FormControl('', Validators.required);
  ageControl = new FormControl('', Validators.required);
  socialWorkControl = new FormControl('', Validators.required);
  lastNameControl = new FormControl('', Validators.required);
  fileControl = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', Validators.required);
  animalControl = new FormControl('', Validators.required);
  animals: any[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
  hide = true;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
