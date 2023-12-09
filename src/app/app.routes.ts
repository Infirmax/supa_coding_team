import { RouterModule, Routes } from '@angular/router';
import { PlayComponent } from './play/play.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PlayModule } from './play/play.module';

const routeConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', title: 'Home Page', component: HomeComponent }, // Default route redirects to home
  { path: 'play', title: 'playPage', component: PlayComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'search', component: SearchBarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig), PlayModule],
  exports: [RouterModule]
})

export class AppRoutingModule { };

