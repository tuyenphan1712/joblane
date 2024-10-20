import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-cv',
  standalone: true,
  templateUrl: './apply-cv.component.html',
  styleUrl: './apply-cv.component.scss',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule, HeaderComponent, FooterComponent],
})
export class ApplyCVComponent implements OnInit{
  applyForm: FormGroup;
  jobId: string | undefined;
  message: string = '';
  cv: string | ArrayBuffer = 'assets/img/Avatar-largesize.jpg';
  user: any;
  jobseeker: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.applyForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      coverLetter: ['', Validators.required],
      cv: [''],
      
    });
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { jobId: string };

    if (state && state.jobId) {
      this.jobId = state.jobId;
    }
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) { // Thêm điều kiện kiểm tra input.files
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.cv = reader.result as string;
        this.applyForm.patchValue({ cv: this.cv });
      };
      reader.readAsDataURL(file);
    }
  }
  ngOnInit() : void {
    const userId = localStorage.getItem('userId');
    const jobseekerId = localStorage.getItem('jobseekerId');
    if (userId) {
        this.http.get<any>(`http://localhost:8080/api/user/${userId}`).subscribe(
            user => {
                this.user = user;
                console.log('user: ', this.user);
                if (this.user.name) {
                    this.applyForm.patchValue({ fullName: this.user.name });
                }
                if (this.user.email) {
                    this.applyForm.patchValue({ email: this.user.email });
                }
            },
            error => {
                console.error('Error loading user details:', error);
            }
        );
    } else {
        console.error('User ID is not available');
    }
    
    if (jobseekerId) {
        this.http.get<any>(`http://localhost:8080/api/jobseeker/${jobseekerId}`).subscribe(
            jobseeker => {
                this.jobseeker = jobseeker;
                console.log('jobseeker: ', this.jobseeker);
                if (this.jobseeker.phone) {
                    this.applyForm.patchValue({ phone: this.jobseeker.phone });
                }
            },
            error => {
                console.error('Error loading jobseeker details:', error);
            }
        );
    } else {
        console.error('Jobseeker ID is not available');
    }
  }
 

  onSubmit() {
    if (this.applyForm.valid) {
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      console.log('Submitting form:', this.applyForm.value);
      const formData = this.applyForm.value;
      const userId = localStorage.getItem('userId');
      const jobSeekerId = localStorage.getItem('jobseekerId');
      console.log('jobseekerId: '+ jobSeekerId)
      const jobPostId = this.jobId;
      this.http.post('http://localhost:8080/api/application/apply', { formData, userId, jobSeekerId, jobPostId} , { headers, responseType: 'text' as 'json' })
        .subscribe(
          (response: any) => {
            
            const parsedResponse = JSON.parse(response);
            console.log('Submitting form:', response);

            this.router.navigate(['/home']);
          },
          (error: any) => {
            console.error("Error from backend:", error);
            this.message = 'Ứng tuyển không thành công';
          }
        );
    }
  }
}
