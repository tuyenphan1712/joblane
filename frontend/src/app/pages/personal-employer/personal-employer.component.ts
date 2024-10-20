import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-personal-employer',
  standalone: true,
  templateUrl: './personal-employer.component.html',
  styleUrls: ['./personal-employer.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule, HeaderComponent, FooterComponent],

})
export class PersonalEmployerComponent implements OnInit {
  profileForm: FormGroup;
  avatar: string | ArrayBuffer = 'assets/img/Avatar-largesize.jpg'; // Đặt avatar mặc định
  companyNames: string[] = [];


  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      avatar: [''],
      companyName: ['', Validators.required],
      companyAddress: [''],
      companyEmail: [''],
      companyDescription: [''],
      companyGoal: [''],
      companyLogo: ['']
    });
  }

  ngOnInit(): void {
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');
    const employerId = localStorage.getItem('employerId');
    const userId = localStorage.getItem('userId');

    if (userName) {
      const [firstName, lastName] = userName.split(' ');
      this.profileForm.patchValue({ firstName: firstName || '', lastName: lastName || '' });
    }

    if (userEmail) {
      this.profileForm.patchValue({ email: userEmail });
    }
    this.http.get<string[]>('http://localhost:8080/api/companies/names').subscribe(names => this.companyNames = names);
  }

  onCompanyNameChange(event: any): void {
    const companyName = event.target.value;
    this.http.get<any>(`http://localhost:8080/api/companies/name/${companyName}`).subscribe(company => {
      this.profileForm.patchValue({
        companyAddress: company.companyAddress,
        companyEmail: company.companyEmail,
        companyDescription: company.companyDescription,
        companyGoal: company.companyGoal,
        companyLogo: company.companyLogo
      });
      console.log('company: ', company.id);
      localStorage.setItem('companyId', company.id);
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) { // Thêm điều kiện kiểm tra input.files
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.avatar = reader.result as string;
        this.profileForm.patchValue({ avatar: this.avatar });
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const formData = this.profileForm.value;
      const employerId = localStorage.getItem('employerId');
      const userId = localStorage.getItem('userId');
      const companyId = localStorage.getItem('companyId');
      console.log('form data: ', formData, companyId);

      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      this.http.post('http://localhost:8080/api/updateEmployer', { formData, employerId, userId, companyId }, { headers })
        .subscribe(
          response => {
            console.log('Profile updated successfully', response);
            this.router.navigate(['/sign-in']);
          },
          error => {
            console.error('Error updating profile', error);
          }
        );
    }
  }
}
