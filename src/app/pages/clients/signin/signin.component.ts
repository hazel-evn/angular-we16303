import { Component, OnInit } from '@angular/core';
import { TypeUser } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userForm: FormGroup 
  constructor(private authService: AuthService) {
      this.userForm = new FormGroup({
        email: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required)
      })
  }

  ngOnInit(): void {
  }
  login(){
    const data = this.userForm.value
    this.authService.SignIn(data).subscribe(data => {
        localStorage.setItem("user", JSON.stringify(data))
    })
  }
}
