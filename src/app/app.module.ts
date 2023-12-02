import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,


  ],
  imports: [
    FormsModule,
    LoginModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }