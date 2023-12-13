import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  signupForm: FormGroup = this.fb.group({
    fname: [null],
    lname: [null],
    username: [null],
    password: [null],
    passwordConfirmation: [null]
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  onSubmit() {
    if (this.signupForm.valid) {
      // If the form is valid, proceed to sign up
      this.signUp();
    } else {
      // If the form is not valid, you can handle validation errors or provide feedback to the user
    }
  }

  signUp() {
    const userData = this.signupForm.value;
  
    const user = {
      name: `${userData.fname} ${userData.lname}`,
      username: userData.username, 
      password: userData.password
    };
    
    this.http.post('http://localhost:3000/register', user) // Send 'user' instead of 'userData'
      .subscribe({
        next: () => {
          console.log('User registered successfully');
          // Handle success, e.g., redirect to login page
        },
        error: (error) => {
          console.error('Error during registration', error);
          // Handle error, e.g., show an error message
        }
      });
  }
}


