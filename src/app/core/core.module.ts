import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResponsiveToolbarComponent} from './menu/responsive-toolbar/responsive-toolbar.component';
import {HomeComponent} from './home/home.component';
import { MembreComponent } from './membre/membre.component';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ResponsiveToolbarComponent, HomeComponent, MembreComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonModule,
  ],
  exports: [ResponsiveToolbarComponent, HomeComponent, MembreComponent]
})
export class CoreModule { }
