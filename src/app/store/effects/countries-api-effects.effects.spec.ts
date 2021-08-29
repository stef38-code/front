import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CountriesApiEffectsEffects } from './countries-api-effects.effects';

describe('CountriesApiEffectsEffects', () => {
  let actions$: Observable<any>;
  let effects: CountriesApiEffectsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CountriesApiEffectsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CountriesApiEffectsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
