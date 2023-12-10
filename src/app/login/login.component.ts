import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppLoginService } from '../service/app-login.service';
import {GoogleLoginProvider, SocialAuthService} from 'angularx-social-login';
import {Router} from '@angular/router';

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
export class LoginComponent {

  loginForm = this.fb.group({
    username: [null],
    password: [null]
  });

  constructor(private fb: FormBuilder, public appLoginService: AppLoginService, private router: Router, private socialAuthService: SocialAuthService ) {}

  onSubmit() {

  }

loginWithGoogle(): void {
this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
.then(() => this.router.navigate(['login']));
}

  ngOnInit(): void {
  }

  logInOnClick() {
    this.appLoginService.logIn();
  }
  

}
