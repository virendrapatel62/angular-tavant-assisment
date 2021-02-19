import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getMyProfile() {
    return this.http.get('/api/profile/me');
  }

  createProfile(data: any) {
    return this.http.post('/api/profile', data);
  }
}
