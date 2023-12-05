import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppLoginService {
  public isLoggedIn: boolean;
  public user: SocialUser | undefined;

  constructor(private authService: SocialAuthService, private router: Router) {
    this.isLoggedIn = false;
  }

  googleLogIn() {
    return from(this.authService.signIn(GoogleLoginProvider.PROVIDER_ID));
  }

  logIn() {
    this.googleLogIn().subscribe((user: SocialUser) => {
      this.user = user;
      this.isLoggedIn = true;
      console.log(`LogIn this.user: ${JSON.stringify(this.user)}`);
    });
  }

  logOut() {
    this.authService.signOut().then(() => {
      console.log(`LogOut this.user: ${JSON.stringify(this.user)}`);
      this.user = undefined;
      this.isLoggedIn = false;
      this.router.navigate(['./play']);
    });
  }
}



