import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titre: string;

  constructor(private store: Store<AppState>) {
    this.store.select('ui').subscribe(response => {
      this.titre = response.pageTitle;
    });
  }

  ngOnInit(): void {
    // This is intentional
  }

}
