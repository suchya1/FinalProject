import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Router } from '@angular/router';
import { Ex, User, Activity} from '../models/ex'; 
import { MessagesService } from '../services/messages.service';
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
    private _Messages:MessagesService
  ) { 
    
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

    this.http.post(this._api + "/log", { Text: text, User: this.Me.Name })
        .subscribe(data=> {
            if(data.json().success){
                this.Me.MyLog.splice(0, 1 );//edit this
            }
        }, err=> {
            console.log(err);
        });
  }
  join(name:string){
    this._Messages.Messages.push({Text:'Welcome',Type:'info'});
  }

}
