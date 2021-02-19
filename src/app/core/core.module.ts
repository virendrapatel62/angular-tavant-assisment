import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor';
import { AuthService } from '../auth/services/auth.service';

@NgModule({
  declarations: [NavbarComponent, LandingComponent, FooterComponent],
  imports: [CommonModule, CoreRoutingModule, HttpClientModule],
  exports: [LandingComponent, NavbarComponent, FooterComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
    AuthService,
  ],
})
export class CoreModule {}
