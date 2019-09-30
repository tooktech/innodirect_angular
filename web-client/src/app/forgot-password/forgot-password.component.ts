import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;
  email: string;
  validationMessage: string;
  isInvalid: boolean;

  constructor(private fb: FormBuilder, private router: Router) { }

  initForm() {
    this.form = this.fb.group({
      email: ['',  Validators.required],
      });
  }

  ngOnInit() {
    this.validationMessage = '';
    this.isInvalid = false;
    this.initForm();

  }

  doNext() {
  debugger;
    if (this.form.valid) {
      if (this.email === 'abc@gmail.com') {
        document.getElementById('demo').innerHTML = '';
        this.router.navigate(['/login']);
      } else {
        document.getElementById('demo').innerHTML = 'Please write a proper email that is already registered';
        this.isInvalid = true;
        this.validationMessage = 'Invalid login !';
      }
    }
  }
}
