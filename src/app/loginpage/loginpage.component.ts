import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginpageComponent implements OnInit {

  usercreds = {
    email: '',
    password: ''
  }
  
  constructor(private afauth: AngularFireAuthModule, private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.usercreds);
  }

}
