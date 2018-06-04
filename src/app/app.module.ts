import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';



import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { NavigationComponent } from './auth/navigation/navigation.component';
import { HomeComponent } from './auth/home/home.component';
import { AuthService } from './auth/auth.service';
import { environment } from '../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth'; //make it available in providers array
import { CreateComponent } from './users/create/create.component';
import { createComponent } from '@angular/compiler/src/core';
import { AddComponent } from './products/add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavigationComponent,
    HomeComponent,
    CreateComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,   // for reactive form 
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegistrationComponent },
      { path: "users", component: CreateComponent },
      { path: "products", component: AddComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "**", redirectTo: "home" }
    ])
  ],
  providers: [AuthService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
