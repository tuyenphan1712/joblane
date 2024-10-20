import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-job-post-detail',
  templateUrl: './job-post-detail.component.html',
  styleUrl: './job-post-detail.component.scss',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FooterComponent, NgFor],
})
export class JobPostDetailComponent implements OnInit {
  jobId: string | undefined;
  jobPost: any;
  company: any;
  employer: any;
  user: any;
  message: string = ' ';

  private baseUrl = 'http://your-backend-url'; // Thay bằng URL của backend

  constructor(private router: Router, private http: HttpClient) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { jobId: string };

    if (state && state.jobId) {
      this.jobId = state.jobId;
    }
  }

  ngOnInit(): void {
    if (this.jobId) {
      this.http.get<any>(`http://localhost:8080/api/jobposts/${this.jobId}`).subscribe(
        jobPost => {
          this.jobPost = jobPost;
          console.log('jobPost: '+ jobPost)

          if (this.jobPost && this.jobPost.companyId.id) {
            // Sau khi lấy được jobPost, tiếp tục lấy thông tin công ty
            this.http.get<any>(`http://localhost:8080/api/companies/${this.jobPost.companyId.id}`).subscribe(
              company => {
                this.company = company;
                console.log('company: ' + company)
              },
              error => {
                console.error('Error loading company details:', error);
              }
            );
          } else {
            console.error('Job post not found or invalid:', jobPost);
          }

          if (this.jobPost && this.jobPost.employerId.id) {
            // Sau khi lấy được jobPost, tiếp tục lấy thông tin công ty
            this.http.get<any>(`http://localhost:8080/api/employer/${this.jobPost.employerId.id}`).subscribe(
              employer => {
                this.employer = employer;
                console.log('employer: ' + this.jobPost.employerId.userId)
                const userid = localStorage.getItem('userId');
                if (this.employer && userid) {
                  // Sau khi lấy được jobPost, tiếp tục lấy thông tin công ty
                  this.http.get<any>(`http://localhost:8080/api/user/${userid}`).subscribe(
                    user => {
                      this.user = user;
                      console.log('user: ' + this.user)
                    },
                    error => {
                      console.error('Error loading company details:', error);
                    }
                  );
                } else {
                  console.error('Job post not found or invalid:', jobPost);
                }

              },
              error => {
                console.error('Error loading company details:', error);
              }
            );
          } else {
            console.error('Job post not found or invalid:', jobPost);
          }
        },
        error => {
          console.error('Error loading job post details:', error);
        }
      );
    }
  }
  onSubmit() : void{
    const userRole = localStorage.getItem('userRole');
    if(userRole == "Employer"){
      this.message = 'Không thể ứng tuyển với vai trò nhà tuyển dụng'
    }else{
      this.router.navigate(['/apply-cv'], { state: { jobId: this.jobId} });
    }
  }
  
}