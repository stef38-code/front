import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembreViewComponent } from './membre-view/membre-view.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { CountriesListComponent } from './country-list/countries-list.component';



@NgModule({
  declarations: [
    MembreViewComponent,
    CountriesListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class ViewsModule { }
