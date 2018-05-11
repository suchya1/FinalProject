var axios = require("axios");

//const Log=[];

//var iCurrent=0;

function Exercise(){
    this.Users=["Ashley"];
    this.SharedLog=["hello"];

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