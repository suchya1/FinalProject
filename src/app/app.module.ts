import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { MessagesService } from './services/messages.service';
import { ExerciseService } from './services/exercise.service';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MessagesComponent,
    LoginComponent,
    ExerciseComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'exercise', component: ExerciseComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full'}
    ])
   ],
  providers: [MessagesService,ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
