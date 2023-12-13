import { Component } from '@angular/core';
import { SocialAuthService  } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <header>
      </header>
      <nav>
      <ul>
      <li><a routerLink="/home">Home</a></li>
        <li><a routerLink="/play">Play</a></li>
        <li><a routerLink="/about">About</a></li>
        <li><a routerLink="/login">Login</a></li>
        <li><a routerLink="/signup">Signup</a></li>
      <!-- Add more navigation links here -->
      </ul>
      </nav>
      <section>
        <app-search-bar></app-search-bar>
      </section>
      <section>
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: SocialUser | null; 
  title = 'plays';

  constructor(private authService: SocialAuthService) 
  { 
	this.user = null;
	this.authService.authState.subscribe((user: SocialUser) => {
	  console.log(user);
	  this.user = user;
	});
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((x: any) => console.log(x));
  }

  signOut(): void {
    this.authService.signOut();
  }   

}
