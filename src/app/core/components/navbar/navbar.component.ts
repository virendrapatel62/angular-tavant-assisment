import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.tokenService.getToken() != null;
  }

  logout() {
    console.log('Logout');
    this.tokenService.clearToken();
    window.location.assign('/auth/login');
  }
}
