import { Component, AfterViewInit, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NgFor } from '@angular/common';
import jQuery from 'jquery';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

const $ = jQuery;

@Component({
  selector: 'app-list-applied-job',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, HttpClientModule, FooterComponent, NgFor],
  templateUrl: './list-applied-job.component.html',
  styleUrls: ['./list-applied-job.component.scss']
})
export class ListAppliedJobComponent implements OnInit, AfterViewInit  {
  items: any[] = [];
  appliedPosts: any[] = [];
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    const jobSeekerId = localStorage.getItem('jobseekerId');
    if (jobSeekerId) {
      this.http.get<any[]>(`http://localhost:8080/api/jobseeker/${jobSeekerId}/applied-posts`)
        .subscribe(appliedPosts => {
          this.appliedPosts = appliedPosts;
          console.log('results:', this.appliedPosts);
        }, error => {
          console.error('Error fetching applied posts', error);
        });
    } else {
      console.error('Job Seeker ID is not available');
    }
  }
  
  ngAfterViewInit() {
    this.initSlickCarousel('.applied-list', {
      dots: true,
      infinite: true,
      speed: 300,
      rows: 5,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '.slick-prev',
      nextArrow: '.slick-next'
    });
  }

  private initSlickCarousel(selector: string, options: any) {
    if (typeof window !== 'undefined') { // Ensure this runs only in the browser
      import('slick-carousel').then(() => {
        $(selector).slick(options);
      }).catch(error => console.error('Error loading slick-carousel:', error));
    }
  }
}
