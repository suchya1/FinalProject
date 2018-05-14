import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Router } from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Ex, User, Activity} from '../models/ex'; 
import { MessagesService } from '../services/messages.service';
import { ExerciseService } from '../services/exercise.service';
import { Observable } from 'rxjs/Observable';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap, merge} from 'rxjs/operators';

//import {debounceTime, distinctUntilChanged, map,switchMap} from 'rxjs/operators';
//import {Observable, of} from 'rxjs';


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  Model = new Ex();
  Me: User;
 // A:Activity;
 searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);
  private _api = "http://localhost:8080/exercise";

  constructor(//add in services
    private http:Http,
    private _Router:Router,
    private _Messages:MessagesService,
    private _Exercise:ExerciseService,
   private _service: lookAhead
  ) { 
    this.Me=_Exercise.Me;
    if(!this.Me)
    {
      _Router.navigate(['/login']);
    }
    this.join(this.Me.Name);

    setInterval(()=> this.refresh(), 1000)
  }

  ngOnInit() {
  }

  refresh(){
    this.http.get(this._api + "/state")
        .subscribe(data=> this.Model = data.json())
  }
  submitLog(e: MouseEvent, text: string){
    e.preventDefault();

    this.http.post(this._api + "/exercise", { Text: text, User: this.Me.Name })
        .subscribe(data=> {
            if(data.json().success){
                this.Me.MyLog.splice(this.Me.MyLog.indexOf(text), 1 );//edit this
            }
        }, err=> {
            console.log(err);
        });
  }
  
  //joins a user to the app
  join(name:string){
    this._Messages.Messages.push({Text:'Welcome '+name+'!',Type:'info'});
    //this.Model.Users.push({UserId:name,Name:name,MyLog:["running","walking","lifting","swimming","soccer"],MyHistory:[]});
    this.http.get(this._api+"/exercise",{params:{UserId:name,Name:name,MyLog:["running","walking","lifting","swimming","soccer"],MyHistory:[]}}
    )
    .subscribe(data=>this.Me.MyLog=data.json())
  }

  //logs activity
  log(act:string)
    {
      this.Me.MyLog.push(act);
      console.log(this.Me.MyLog);
    } 
    //submits activity to share
    submit(act:string)   
    {
      this.Me.MyLog.push(act);
      this.Model.SharedLog.push({Text:act,UserId:this.Me.Name,Chosen:true});
      console.log(this.Model.SharedLog);
    }
    share(act:string)
    {
      this.Model.SharedLog.push({Text:act,UserId:this.Me.Name,Chosen:true});
    }
    search=(text:Observable<string>)=>
      text.pipe(
        debounceTime(300),
         distinctUntilChanged(),
      // map(x=>[x])//shows these in output
        //switchMap(x=>this.http.get())
        switchMap(x=>this._service.search(x)))
      /*  .pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return String([]);
          }))
      ),
      tap(() => this.searching = false),
      merge(this.hideSearchingWhenUnsubscribed)
    );*/
}

const PARAMS = new HttpParams({
  fromObject: {
    action: 'opensearch',
    format: 'json',
    origin: '*'
  }
});

@Injectable()
export class lookAhead {
  private _api = "http://localhost:8080/game";
  
  constructor(private http: HttpClient) {}

  search(term: string) {
    if (term === '') {
      return  String([]);
    }

    return this.http
      .get(this._api, {params: PARAMS.set('search', term)}).pipe(
        map(response => response[1])
      );
  }
}