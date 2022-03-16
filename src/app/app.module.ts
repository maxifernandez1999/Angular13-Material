import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCommonModule} from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './components/menu/menu.component';
import { TableComponent } from './components/table/table.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { ButtonComponent } from './components/button/button.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { GridComponent } from './components/grid/grid.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SelectComponent } from './components/select/select.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './pages/login/login.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TableComponent,
    ButtonComponent,
    GridComponent,
    ProgressBarComponent,
    SelectComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatCommonModule,
    MatInputModule,
    MatGridListModule,
    MatProgressBarModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    NgxMatFileInputModule //para utilizar este modulo hay que instalar: npm i @angular-material-components/file-input
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
