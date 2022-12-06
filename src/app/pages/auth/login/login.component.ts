import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { whitespaceValidator } from 'src/app/functions/functions';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
const swal = require('sweetalert2');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          whitespaceValidator,
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
          whitespaceValidator,
        ],
      ],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.authService.signin().subscribe((res: any) => {
      res.forEach((ele: any) => {
        if (
          ele.email == this.loginForm.value.email &&
          ele.password == this.loginForm.value.password
        ) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login Successfull',
            showConfirmButton: false,
            width:400,
            heightAuto:true,
            timer: 1500,
          });
          console.log('Login Successfull');
          this.router.navigate(['/admin/dashboard']);
        } else {
          console.log('Please check Creditantial');
        }
      });
    });
  }
}
