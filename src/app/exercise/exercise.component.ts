import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Router } from '@angular/router';
import { Ex, User, Activity} from '../models/ex'; 
import { MessagesService } from '../services/messages.service';
import { ExerciseService } from '../services/exercise.service';
@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  Model = new Ex();
  Me: User;
 // A:Activity;
  private _api = "http://localhost:8080/exercise";

  constructor(//add in services
    private http:Http,
    private _Router:Router,
    private _Messages:MessagesService,
    private _Exercise:ExerciseService
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
}
