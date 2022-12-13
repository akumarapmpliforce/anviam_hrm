import { CommonService } from './../../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { whitespaceValidator } from 'src/app/functions/functions';
import { AuthService } from 'src/app/services/auth.service';
import { fadeInAnimation } from 'src/app/shared/animations/route-animation';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private ngxService: NgxUiLoaderService,
    private commonService : CommonService
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
    this.ngxService.start();
    this.submitted = true;
    this.authService.signin().subscribe((res: any) => {
      res.forEach((ele: any) => {
        if (
          ele.email == this.loginForm.value.email &&
          ele.password == this.loginForm.value.password
        ) {
          const results = res.filter(
            (entry: any) =>
              entry.email == this.loginForm.value.email &&
              entry.password == this.loginForm.value.password
          );
          const token = this.commonService.generateToken(200);
          localStorage.setItem('token',token);
          localStorage.setItem('hrm-user', JSON.stringify(results[0]));
          this.authService.userLoggedIn$.next(true);

          this.router.navigate(['/admin/dashboard']);
          Swal.fire({
            position: 'top-end',
            title: 'Login Successfull',
            showConfirmButton: false,
            width: 500,
            timer: 2000,
            toast: true,
          });
        } else {
          console.log('Please check Creditantial');
        }
      });
      this.ngxService.stop();
    });
  }


 

}
