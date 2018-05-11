import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MessagesService } from './messages.service';
import { User, Activity } from '../models/ex';
import {Router} from '@angular/router';

@Injectable()
export class ExerciseService {
  Me:User;
  token:string;
  pic:string;
  constructor(private http:Http, private _Messages:MessagesService, private _Router:Router) { }

  login(name:string, password:string){
    if(password=='123'){
       //log the user in
       this.Me={Name:name,MyLog:[],MyHistory:[]};
       this._Router.navigate(['/log']);
    }
  }
}
