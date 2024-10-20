import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-jobseeker',
  standalone: true,
  templateUrl: './post-new-job.component.html',
  styleUrls: ['./post-new-job.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule, HeaderComponent, FooterComponent],

})
export class PostNewJobComponent {
  jobpostForm: FormGroup;
  message: string = '';
  jobPostImage: string | ArrayBuffer = 'assets/img/Avatar-largesize.jpg';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.jobpostForm = this.fb.group({
      title: ['', Validators.required],
      category1: ['', Validators.required],
      category2: ['', Validators.required],
      category3: ['', Validators.required],
      location: ['', Validators.required],
      type: ['', Validators.required],
      companyType: ['', Validators.required],
      specialization: ['', Validators.required],
      experience: ['', Validators.required],
      salaryRange: ['', Validators.required],
      benefitsAndDescription: ['', Validators.required],
      requirement: ['', Validators.required],
      hiringProcess: ['', Validators.required],
      howToApply: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      jobPostImage: [''],
      
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) { // Thêm điều kiện kiểm tra input.files
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.jobPostImage = reader.result as string;
        this.jobpostForm.patchValue({ jobPostImage: this.jobPostImage });
      };
      reader.readAsDataURL(file);
    }
  }
 

  onSubmit() {
    if (this.jobpostForm.valid) {
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      console.log('Submitting form:', this.jobpostForm.value);
      const formData = this.jobpostForm.value;
      const userId = localStorage.getItem('userId');
      const userRole = localStorage.getItem('userRole');
      const employerId = localStorage.getItem('employerId');
      this.http.post('http://localhost:8080/api/jobposts/create', { formData, userId, userRole, employerId} , { headers, responseType: 'text' as 'json' })
        .subscribe(
          (response: any) => {
            
            const parsedResponse = JSON.parse(response);
            console.log('Submitting form:', response);

            this.router.navigate(['/home']);
          },
          (error: any) => {
            console.error("Error from backend:", error);
            this.message = 'Đăng bài không thành công';
          }
        );
    }
  }
}
