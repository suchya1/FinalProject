import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Ex:ExerciseService) { }

  ngOnInit() {
  }
  login(name:string,password:string)
    {
      console.log('in lc')
        this._Ex.login(name,password);
    }
}
