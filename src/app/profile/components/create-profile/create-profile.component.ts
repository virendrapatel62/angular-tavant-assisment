import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileFormData } from '../../models/profile-form-data';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
})
export class CreateProfileComponent implements OnInit {
  formData: ProfileFormData = new ProfileFormData();
  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    this.formData.bio = 'lorem ipsum';
    this.formData.company = 'lorem ipsum';
    this.formData.githubusername = 'lorem ipsum';
    this.formData.location = 'lorem ipsum';
    this.formData.status = 'lorem ipsum';
    this.formData.website = 'lorem ipsum';
    this.formData.skills = 'lorem,ipsum,lorem ipsum,angular,node';
  }

  createProfile() {
    console.log(this.formData);
    this.profileService.createProfile(this.formData).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/profile']);
      },
      error: (res) => {
        console.log(res);
      },
    });
  }
}
