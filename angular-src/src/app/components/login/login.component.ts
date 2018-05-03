import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user ={
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {      
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.flashMessagesService.show('You are logged in', {
          cssClass: 'alert-success',
          timeout: 5000
        });

        // Redirect some url based on the user's role        
        if(data.user.role == 'user'){
          this.router.navigate(['/dashboard']);
        } else if(data.role == 'super'){

        } else {

        }

      } else {
        this.flashMessagesService.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000
        });
      }
    });
  }
}
