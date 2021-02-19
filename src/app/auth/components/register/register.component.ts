import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/services/token.service';
import { RegisterFormData } from '../../models/register-form-data';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formData: RegisterFormData = new RegisterFormData();
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formData.email =
      'email' + Math.floor(Math.random() * 1000) + '@gmail.com';
    this.formData.name = 'name' + Math.floor(Math.random() * 1000);
    this.formData.password = '1234567890';
    this.formData.password2 = '1234567890';
  }

  registerUser() {
    console.log({ formData: this.formData });
    this.authService.registerUser(this.formData).subscribe({
      next: (res: any) => {
        this.tokenService.saveTokenToLocalStorage(res.token);
        this.router.navigate(['/profile']);
      },
      error: (response: HttpErrorResponse) => {
        console.log(response.error);
      },
    });
  }
}
