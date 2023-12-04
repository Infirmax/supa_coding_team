import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SignupModule } from './signup/signup.module';
import { Component } from '@angular/core';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';



@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,


  ],
  imports: [
    FormsModule,
    LoginModule,
    SignupModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '710669443340-dm97eraqvjsuao0iitiimf7fbggsnfjk.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }