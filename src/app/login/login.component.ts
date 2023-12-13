import { Component, ChangeDetectionStrategy, NgZone, AfterViewInit  } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppLoginService } from '../service/app-login.service';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';


declare const gapi: any;

@Component({
  selector: 'app-login',
  template: `
    <div class="login-container">
      <div class="login-content">
        <mat-toolbar class="login-toolbar" color="primary">Login forum</mat-toolbar>
        <mat-card>
          <form [formGroup]="loginForm" novalidate (ngSubmit)="onSubmit()">
            <mat-form-field>
              <mat-icon matPrefix>person_outline</mat-icon>
              <input autofocus type="text" matInput placeholder="Username" formControlName="username">
            </mat-form-field>

            <mat-form-field>
              <mat-icon matPrefix>lock_outline</mat-icon>
              <input type="password" autocomplete="false" matInput placeholder="Password" formControlName="password">
            </mat-form-field>

            <div class="login-buttons">
              <button type="submit" id = "signup">Sign Up</button>  
              <button type="submit" mat-raised-button color="primary">Log in</button>

              <!-- Google login button -->
              <button (click)="loginWithGoogle()" mat-raised-button class="google-login-btn">Google</button>
            </div>
          </form>
        </mat-card>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements AfterViewInit {

  loginForm = this.fb.group({
    username: [null],
    password: [null]
  });

  constructor(private socialAuthService: SocialAuthService,private fb: FormBuilder, public appLoginService: AppLoginService, private ngZone: NgZone, private router: Router, private http: HttpClient) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const userData = this.loginForm.value;
  
      // Send the username and password to your backend for authentication
      this.sendToBackend(userData);
    }
  }

  ngAfterViewInit(): void {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: '710669443340-dm97eraqvjsuao0iitiimf7fbggsnfjk.apps.googleusercontent.com',
      });
    });
  }

  loginWithGoogle(): void {
    gapi.auth2.getAuthInstance().signIn()
      .then((googleUser: any) => {
        const profile = googleUser.getBasicProfile();
        console.log('Google login successful', profile);

        // Extract relevant information from the Google user
        const googleUserData = {
          idToken: googleUser.getAuthResponse().id_token,
          name: profile.getName()
        };

        // Send the Google login information to your backend
        this.sendToBackend(googleUserData);
      })
      .catch((error: any) => {
        console.error('Google login failed', error);
      });
  }
  
  ngOnInit(): void {
  }

  logInOnClick() {
    this.appLoginService.logIn();
  }

  private sendToBackend(googleUserData: any): void {
    // Make an HTTP post request to your backend
    this.http.post('http://localhost:3000/google-login', googleUserData)
    .subscribe({
      next: (response) => {
          console.log('Backend response:', response);
          // Handle successful response if needed
          this.router.navigate(['/home']);
      },
      
      error: (error) => {
          console.error('Error sending data to backend:', error);
          // Handle error if needed
      }
  });
  
} 

}
