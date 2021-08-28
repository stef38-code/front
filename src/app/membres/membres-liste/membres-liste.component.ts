import { Component, OnInit } from '@angular/core';
import {AppState, UIUpdatePageTitleAction} from '../../store';
import {Store} from '@ngrx/store';
import {MembreLoadAction} from '../../store/actions/membre-action.actions';

@Component({
  selector: 'app-membres-liste',
  templateUrl: './membres-liste.component.html',
  styleUrls: ['./membres-liste.component.css']
})
export class MembresListeComponent implements OnInit {

  titre: string;

  constructor(private store: Store<AppState>) {
    this.store.select('ui').subscribe(response => {
      this.titre = response.pageTitle;
    });
  }

  ngOnInit(): void {

  }

}
