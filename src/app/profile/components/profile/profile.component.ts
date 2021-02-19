import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: any;
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getMyProfile().subscribe({
      next: (profile) => {
        console.log(profile);
        this.profile = profile;
      },
      error: (response: HttpErrorResponse) => {
        console.log(response.error);
      },
    });
  }
}
