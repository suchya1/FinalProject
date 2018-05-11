import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _Messages:MessagesService) { 
    this._Messages.Messages.push({Text:'New! You can now complete daily tasks!',Type:'info'});
  }

  ngOnInit() {
  }

}
