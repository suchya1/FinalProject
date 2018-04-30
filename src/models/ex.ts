export class Ex {
   
    Users: User[];
    DoneTips: Tip[];
}

export class User {
    Name: string;
    MyTips: string[];
}

export class Tip {
    Text: string;
    UserId: string;
    Chosen: boolean = false;
}