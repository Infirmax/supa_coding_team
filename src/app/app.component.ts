import { Component } from '@angular/core';


@Component({
  selector: 'app-root',

  template: `
    <main>
      <header>
      </header>
      <nav>
      <ul>
        <li><a routerLink="/home">Home</a></li>
        <li><a routerLink="/about">About</a></li>
        <li><a routerLink="/login">Login</a></li>
        <li><a routerLink="/signup">signup</a></li>
      <!-- Add more navigation links here -->
      </ul>
      </nav>
      <section>
        <router-outlet></router-outlet>
      </section>
      <section>
        <app-search-bar></app-search-bar>
      </section>  
  
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homes';
}
