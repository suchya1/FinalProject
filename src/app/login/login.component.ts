import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';

declare var googleyolo:any;
declare var FB:any;
declare var window:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Ex:ExerciseService) {
    window.fbAsyncInit = () => {
      FB.init({
          appId      : '2263577020339632',
          cookie     : true,
          xfbml      : true,
          version    : 'v2.12'
      });
          
      FB.AppEvents.logPageView();   
  };

  (function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = <HTMLScriptElement>d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  }
  ngOnInit() {
  }
  fblogin(){
    FB.login((credentials:any)=>{
                FB.api("/me", (response :any)=>{
                    console.log(response);
                 })
              },{scope:"email"})
  }
  googlelogin(){
    googleyolo.hint({
      supportedAuthMethods: [
        "https://accounts.google.com",
        //"googleyolo://id-and-password"
      ],
      supportedIdTokenProviders: [
        {
          uri: "https://accounts.google.com",
          clientId: "YOUR_GOOGLE_CLIENT_ID" //put one from console
        }
      ]
    }).then((credentials:any)=>{
        this._Ex.oAuthLogin(credentials.displayName,credentials.idToken,credentials.profilePicture);
        console.log(credentials);
    })
  }
    login(name:string,password:string)
    {
        this._Ex.login(name,password);
    }
}

