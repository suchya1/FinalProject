import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _Ex:ExerciseService) { }

  ngOnInit() {
  }
  register(name:string,age:string,fname:string,password:string)
    {
        this._Ex.register(name,age,fname,password);
    }
}
