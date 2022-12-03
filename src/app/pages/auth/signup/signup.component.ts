import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ConfirmedValidator,
  whitespaceValidator,
} from 'src/app/functions/functions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  SignUpForm!: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder, private router:Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.SignUpForm = this.fb.group(
      {
        firstname: [
          null,
          [Validators.required, Validators.maxLength(30), whitespaceValidator],
        ],
        lastname: [
          null,
          [Validators.required, Validators.maxLength(30), whitespaceValidator],
        ],
        email: [
          null,
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
            whitespaceValidator,
          ],
        ],
        password: [
          null,
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12),
            whitespaceValidator,
          ],
        ],
        confirm_password: [null, [Validators.required, whitespaceValidator]],
      },
      {
        validator: ConfirmedValidator('password', 'confirm_password'),
      }
    );
  }
  onSubmit() {
    this.submitted = true;
  }
  navigateToLogin(){
    this.router.navigate(['auth/login'])
  }
}
