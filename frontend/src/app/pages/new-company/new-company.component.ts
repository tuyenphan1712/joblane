import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-new-company',
  standalone: true,
  templateUrl: './new-company.component.html',
  styleUrl: './new-company.component.scss',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule, HeaderComponent, FooterComponent],
})
export class NewCompanyComponent {
  companyForm: FormGroup;
  message: string = '';
  companyLogo: string | ArrayBuffer = 'assets/img/Avatar-largesize.jpg';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.companyForm = this.fb.group({
      companyName: ['', Validators.required],
      companyAddress: ['', Validators.required],
      companyEmail: ['', [Validators.required]],
      companyDescription: ['', Validators.required],
      companyGoal: ['', Validators.required],
      companyLogo: ['']
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) { // Thêm điều kiện kiểm tra input.files
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.companyLogo = reader.result as string;
        this.companyForm.patchValue({ companyLogo: this.companyLogo });
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.companyForm.valid) {
      const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
      console.log('Submitting form:', this.companyForm.value);
      this.http.post('http://localhost:8080/api/companies/create', this.companyForm.value, { headers, responseType: 'text' as 'json' })
        .subscribe(
          (response: any) => {
            
            const parsedResponse = JSON.parse(response);

            this.router.navigate(['/personal-employer']);
          },
          (error: any) => {
            console.error("Error from backend:", error);
            this.message = 'Đăng ký không thành công';
          }
        );
    }
  }
}
