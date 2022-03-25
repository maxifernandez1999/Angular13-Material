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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { GridComponent } from './components/grid/grid.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SelectComponent } from './components/select/select.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './pages/login/login.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutComponent } from './components/layout/layout.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import {MatDividerModule} from '@angular/material/divider';
import { RippleComponent } from './components/ripple/ripple.component';
import {MatRippleModule} from '@angular/material/core';
import { HomeComponent } from './pages/home/home.component';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { OpenDialogComponent } from './components/open-dialog/open-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TableComponent,
    GridComponent,
    ProgressBarComponent,
    SelectComponent,
    LoginComponent,
    AutocompleteComponent,
    LayoutComponent,
    InputComponent,
    ButtonComponent,
    RippleComponent,
    HomeComponent,
    DialogComponent,
    OpenDialogComponent
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
    MatAutocompleteModule,
    LayoutModule,
    FlexLayoutModule, //npm i @angular/flex-layout
    MatDividerModule,
    MatRippleModule,
    MatDialogModule,
    FormsModule,
    NgxMatFileInputModule //para utilizar este modulo hay que instalar: npm i @angular-material-components/file-input
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
