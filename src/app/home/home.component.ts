import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { User, Ex } from '../models/ex';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Me:User;
  Model=new Ex();
  constructor(private _Messages:MessagesService) { 
    this._Messages.Messages.push({Text:'New! You can now complete daily tasks!',Type:'info'});
  }

  ngOnInit() {
  }
  LoggedIn = () => this.Model.Users.find(x=>x.Name==this.Me.Name);

}
