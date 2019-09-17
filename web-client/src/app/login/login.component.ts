import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import {StringUtils} from '../helpers/string-utils';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  username: string;
  password: string;
  validationMessage: string;
  isInvalid: boolean;


  constructor(private fb: FormBuilder, private router: Router) {

  }


  initForm() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  ngOnInit() {
    this.validationMessage = '';
    this.isInvalid = false;
    this.initForm();
  }

  doLogin() {
       debugger;

       if (StringUtils.isStringNonEmpty(this.username) || StringUtils.isStringNonEmpty(this.password)) {
      this.isInvalid = false;
      this.validationMessage = 'Please insert something!';
    } else {
      if (this.username === 'abc' && this.password === 'abc') {
        this.router.navigate(['/dashboard']);
      } else {
        this.isInvalid = true;
        this.validationMessage = 'Invalid login !';
      }
    }
  }
}
