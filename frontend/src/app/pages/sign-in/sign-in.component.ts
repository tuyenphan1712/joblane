import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sign-in', 
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: []

})
export class SignInComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post<any>('http://localhost:8080/api/auth/login', { email: this.email, password: this.password }).subscribe(
      response => {
        console.log('Login successful', response.role);
        console.log('id', response.id);
        
        localStorage.setItem('userRole', response.role);
        localStorage.setItem('userId', response.id);
        if(response.role == 'Jobseeker'){
          localStorage.setItem('jobseekerId', response.jobSeekerId.id);
          console.log('jobseeker id', response.jobSeekerId.id);
        }else if(response.role == 'Employer'){
          localStorage.setItem('employerId', response.employerId.id);
          console.log('employer id', response.employerId.id);
        }

        
        this.message = 'Login successful: ';
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Login failed', error);
        this.message = 'Email hoặc mật khẩu không đúng';
      }
    );
  }
}
