import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth : any = {};

  constructor(private _authService : AuthService) { }

  ngOnInit() {
  }

  loginWithEmail() {
    this._authService.loginWithEmail(this.auth);
  }

  loginWithGoogle() {
    this._authService.loginWithGoogle();
  }

}
