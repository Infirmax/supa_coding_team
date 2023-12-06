import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <header>
      </header>
      <nav>
    <ul>
      <li><a routerLink="/play">play</a></li>
      <li><a routerLink="/about">About</a></li>
      <li><a routerLink="/login">Login</a></li>
    <!-- Add more navigation links here -->
    </ul>
    </nav>
      <section>
        <router-outlet></router-outlet>
      </section>

      <div>
      <input type="text" [ngModel]="searchTerm" (input)="updateSearchTerm(($event.target as HTMLInputElement).value)">
      <table>
        <thead>
          <tr>
            <th>Item</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of items | filter:searchTerm">
            <td>{{item}}</td>
          </tr>
        </tbody>
      </table>

  </div> 
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plays';
  searchTerm: string = '';
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  updateSearchTerm(value: string) {
    this.searchTerm = value;
  }
}