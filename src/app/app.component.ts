import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
constructor(private readonly router: Router) {
}

  click(): void {
    console.log('-------------------------');
    this.router.navigate(['/home/membres']);
  }
}
