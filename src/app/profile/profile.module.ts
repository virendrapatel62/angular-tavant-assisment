import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { AuthTokenInterceptor } from '../core/interceptors/auth-token.interceptor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateProfileComponent, ProfileComponent],
  imports: [CommonModule, ProfileRoutingModule, HttpClientModule, FormsModule],
  providers: [
    ProfileService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
  ],
})
export class ProfileModule {}
