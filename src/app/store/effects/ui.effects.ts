import { Injectable } from '@angular/core';
import { Actions} from '@ngrx/effects';



@Injectable()
export class UiEffects {
  constructor(private actions$: Actions) {}
}
