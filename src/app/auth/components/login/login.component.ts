import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/services/token.service';
import { LoginFormData } from '../../models/login-form-data';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formData: LoginFormData = new LoginFormData();
  errorMessages: Array<any> = [];
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.loginUser(this.formData).subscribe({
      next: (res: any) => {
        this.tokenService.saveTokenToLocalStorage(res.token);
        this.router.navigate(['/profile']);
        this.errorMessages = [];
      },
      error: (response) => {
        this.errorMessages = <[]>response.error.errors;
      },
    });
  }
}
