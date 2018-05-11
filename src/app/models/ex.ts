export class Ex {
   
    Users: User[];
    SharedLog: Activity[];
}

export class User {
    Name: string;
    MyLog: string[];
    MyHistory: string[];
}

export class Activity {
    Text: string;
    UserId: string;
    Chosen: boolean = false;
}