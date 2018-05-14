export class Ex {
   
    Users: User[];
    SharedLog: Activity[];
}

export class User {
    UserId:string;
    Name: string;
    MyLog= ["running","walking","lifting","swimming","soccer"];
    MyHistory: string[];
}

export class Activity {
    Text: string;
    UserId: string;
    Chosen: boolean = false;
}