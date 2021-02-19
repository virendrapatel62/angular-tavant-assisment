import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from 'src/app/core/services/token.service';
import { LoginFormData } from '../models/login-form-data';
import { RegisterFormData } from '../models/register-form-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(formData: RegisterFormData) {
    const body = {
      email: formData.email,
      name: formData.name,
      password: formData.password,
    };

    return this.http.post('/api/users', body);
  }

  loginUser(formData: LoginFormData) {
    return this.http.post('/api/auth', formData);
  }
}
