import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
  Messages:{Text:string,Type:'info'}[];
  constructor() { 
    this.Messages=[
      
    ];
  }

}
