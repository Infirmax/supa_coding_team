import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  template: `
    <div class="signup-container">
      <div class="signup-content">
        <mat-toolbar class="signup-toolbar" color="primary">signup forum</mat-toolbar>
        <mat-card>
          <form [formGroup]="signupForm" novalidate (ngSubmit)="onSubmit()">
            <div class="fullname">
              <mat-form-field>
                <mat-icon matPrefix>face</mat-icon>
                <input autofocus type="text" matInput placeholder="First name" formControlName="fname">
              </mat-form-field>

              <mat-form-field>
                <mat-icon matPrefix>face</mat-icon>
                <input autofocus type="text" matInput placeholder="Last name" formControlName="lname">
              </mat-form-field>
            </div>
          
            <mat-form-field>
              <mat-icon matPrefix>person_outline</mat-icon>
              <input autofocus type="text" matInput placeholder="Username" formControlName="username">
            </mat-form-field>

            <mat-form-field>
              <mat-icon matPrefix>lock_outline</mat-icon>
              <input type="password" autocomplete="false" matInput placeholder="Password" formControlName="password">
            </mat-form-field>

            <mat-form-field>
              <mat-icon matPrefix>lock_outline</mat-icon>
              <input type="password" autocomplete="false" matInput placeholder="Password Confirmation" formControlName="password-confirmation">
            </mat-form-field>

            <div class="signup-buttons">
              <button type="submit" id = "signup">Log in</button> 
              <button type="submit" mat-raised-button color="primary">Sign up</button> 
            </div>
          </form>
        </mat-card>
      </div>
    </div>
  `,
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent {

  signupForm = this.fb.group({
    username: [null],
    password: [null]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {

  }

}
