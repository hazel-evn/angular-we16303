import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  users: {username: string, password: string, email: string} = {
    username: "",
    password: "",
    email: ""
  }
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  register(){
    this.authService.signUp(this.users).subscribe((data) => {
      console.log(data);
    })
    
  }
}
