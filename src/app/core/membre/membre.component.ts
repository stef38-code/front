import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {
titre: string;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('ui').subscribe(response => {
      this.titre = response.pageTitle;
    });
  }

}
