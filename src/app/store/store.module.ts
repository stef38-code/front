import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { CountriesApiEffectsEffects } from './effects/countries-api-effects.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([CountriesApiEffectsEffects])
  ]
})
export class StoreModule { }
