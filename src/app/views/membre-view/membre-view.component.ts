import {Component, Input, OnInit, Output} from '@angular/core';
import { CountryModel } from '../../shared/models/country/country-model';

@Component({
  selector: 'app-membre-view',
  templateUrl: './membre-view.component.html',
  styleUrls: ['./membre-view.component.css']
})
export class MembreViewComponent implements OnInit {

  @Input() countries: CountryModel[];
  @Input() readonly = false;
  @Output() select = new EventEmitter();
  @Output() delete = new EventEmitter();

  selectedCountry: CountryModel = {} as CountryModel;

  constructor() {
    this.selectedCountry.name = 'empty';
  }

  public selectCountry(selCountry: CountryModel) {
    let obj = Object.values(selCountry);
    // alert(obj);
    this.selectedCountry = {
      name: selCountry.name,
      capital: selCountry.capital,
      population: selCountry.population,
      currencies: selCountry.currencies,
      flag: selCountry.flag
    };
  }

}
