import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';


/*class Control {
  constructor(s: string, required: (control: AbstractControl) => (ValidationErrors | null)) {
    }
} */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  user: string;
  password: string;
  email:string;

  validationMessage: string;
  isInvalid: boolean;

  constructor(private fb: FormBuilder, private router: Router)
  {

  }

  ngOnInit() {
    this.validationMessage = '';
    this.isInvalid = false;
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  doLogin() {
    //validate form
    /*this.loginForm = new FormGroup({
      'user': new FormControl(this.login.user),
      'email': new FormControl(this.login.email, Validators.required(this.email)),
      'password': new FormControl(this.login.password, Validators.required(this.password))
    });*/
     if(this.user ==' '|| this.password ==' '|| this.email == ' ')
     {
       this.isInvalid=true;
       this.validationMessage = 'Please insert something!';
     }

    else

    if (this.user == "abc" && this.email == "abc" && this.password == "abc")
    {
      this.router.navigate(['/dashboard']);
    }
    else
      {
        this.isInvalid = true;
        this.validationMessage = 'Invalid login !';
      }
    }

}
