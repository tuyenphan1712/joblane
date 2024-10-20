import { Component, AfterViewInit, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NgFor } from '@angular/common';
import jQuery from 'jquery';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

const $ = jQuery;

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, HttpClientModule, HeaderComponent, FooterComponent, NgFor],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  searchForm: FormGroup;
  locations: string[] = [];
  categories: string[] = ["Design", "Finance/Bank", "IT", "Doctor/Nurse", "Human Resource", "Sales", "Marketing", "Tourism", "Broadcasting", "BA,DA,BI", "Logistic", "Translation", "Teacher", "Lawyer", "Accounting", "Engineer", "General Labor"];
  

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.searchForm = this.fb.group({
      title: [''],
      location: [''],
      category: ['']
    });
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      title: [''],
      location: [''],
      category: ['']
    });

    this.http.get<string[]>('http://localhost:8080/api/locations').subscribe(locations => {
      this.locations = locations;
    });
  }

  onSearch(): void {
    const searchParams = this.searchForm.value;
    this.http.post<any[]>('http://localhost:8080/api/search-jobs', searchParams).subscribe(results => {
      console.log(results);
      this.router.navigate(['/search-result'], { state: { results } });
    });
  }
}