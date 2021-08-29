import {Component, OnInit} from '@angular/core';
import {CountryModel, CountryRequiredProps} from '../../shared/models/country/country-model';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectActiveCountry, selectAllCountries, State} from '../../store/states/countries.state';
import {CountriesPageActions} from '../../shared/actions';

@Component({
  selector: 'app-membre-view',
  templateUrl: './membre-view.component.html',
  styleUrls: ['./membre-view.component.css']
})
export class MembreViewComponent implements OnInit {
  countries$: Observable<CountryModel[]>;
  currentCountry$: Observable<CountryModel | null>;
  total$: Observable<number>;

  constructor(private store: Store<State>) {
    this.countries$ = store.select(selectAllCountries);
    this.currentCountry$ = store.select(selectActiveCountry);
  }

  ngOnInit(): void {
    this.store.dispatch(CountriesPageActions.enter());
  }

  onSelect(country: CountryModel): void {
    // this.store.dispatch(CountriesPageActions.selectCountry({ countryId: country.name }));
  }

  onCancel(): void {
    this.removeSelectedCountry();
  }

  removeSelectedCountry(): void {
    this.store.dispatch(CountriesPageActions.clearSelectedCountry());
  }
  /*
    onSave(country: CountryRequiredProps | CountryModel) {
      if ("name" in country) {
        this.updateCountry(country);
      } else {
        this.saveCountry(country);
      }
    }
  */
  saveCountry(countryProps: CountryRequiredProps): void {
    this.store.dispatch(CountriesPageActions.createCountry({ country: countryProps }));
  }

  updateCountry(country: CountryModel): void {
    this.store.dispatch(
      CountriesPageActions.updateCountry({ countryId: country.name, changes: country })
    );
  }

  onDelete(country: CountryModel): void {
    this.store.dispatch(CountriesPageActions.deleteCountry({ countryId: country.name }));
  }

}
