import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembreViewComponent } from './membre-view/membre-view.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    MembreViewComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class ViewsModule { }
