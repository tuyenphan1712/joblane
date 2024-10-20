import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sign-in-1',
  templateUrl: './sign-in-1.component.html',
  styleUrl: './sign-in-1.component.scss',


})
export class SignIn1Component {
  constructor(private http: HttpClient, private router: Router) { }

  createJobSeeker() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.http.post('http://localhost:8080/api/auth/jobseeker', { userId: userId }).subscribe((response: any) => {
        localStorage.setItem('role', 'Jobseeker');
        console.log('Jobseeker created:', response);
        localStorage.setItem('jobseekerId', response.id); 
        console.log('Jobseeker id:', response.id);
        this.router.navigate(['/personal-jobseeker']);
      });
    } else {
      console.error('User ID not found in localStorage');
    }
  }

  createEmployer() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.http.post('http://localhost:8080/api/auth/employer', { userId: userId }).subscribe((response: any) => {
        localStorage.setItem('role', 'Employer');
        console.log('Employer created:', response);
        localStorage.setItem('employerId', response.id); 
        console.log('Employer id:', response.id);
        this.router.navigate(['/personal-employer']);
      });
    } else {
      console.error('User ID not found in localStorage');
    }
  }
}
