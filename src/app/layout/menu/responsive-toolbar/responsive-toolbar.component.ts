import {Component, OnInit} from '@angular/core';
import {AppState, UIUpdatePageTitleAction, MenuItem} from '../../../store';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.css']
})
export class ResponsiveToolbarComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: '',
      icon: 'home',
      url: '/home',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Membres',
      icon: 'person',
      url: '/membres',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
/*
    {
      label: 'About',
      icon: 'help',
      url: '',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Pricing',
      icon: 'attach_money',
      url: '',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Docs',
      icon: 'notes',
      url: '',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Showcase',
      icon: 'slideshow',
      url: '',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Blog',
      icon: 'rss_feed',
      url: '/membres',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },*/
  ];

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    // This is intentional
  }

  public navigateMenu(s: string): void {
    // tslint:disable-next-line:no-debugger
    debugger;
    console.log(s);
    this.store.dispatch(new UIUpdatePageTitleAction(s));
    this.router.navigate([s]);

  }
}
