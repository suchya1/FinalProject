var axios = require("axios");

const Activity=["running","walking","lifting","swimming","soccer"];

//var iCurrent=0;

function Exercise(){
    this.Users=[];
    this.SharedLog=[];

    this.IsLoggedIn=(userId)=>{
        if(this.Users.some(x=>x.UserId==userId)){
            return true;
        }
        else{
            this.Users.push({UserId:userId,Name:"A"})
            return false;
        }
    }

    this.GetLog=(userId)=>{
        if(this.Users.some(x=>x.UserId==userId)){
            return Activity;
        }
    }

    this.SubmitLog = (text, userId) => {
        this.SharedLog.push({ Text: text, UserId: playerId });
    } 
    
    //this.DoneActivities=[];

    /*this.GetTips=(userId)=>{
        if(this.Users.some(x=>x.UserId==userId)){

        }
        else{
            this.Users.push({UserId:userId});
        }
        return Tips.slice(iCurrentTip,iCurrentTip=(iCurrentTip+3)%iCurrentTip.length);
    }*/
}
module.exports = Exercise;