import { Component, AfterViewInit, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule, NgFor } from '@angular/common';
import jQuery from 'jquery';
import { Router } from '@angular/router';

const $ = jQuery;

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FooterComponent, NgFor],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements AfterViewInit, OnInit {
  items: any[] = [];
  results: any[] = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { results: any[] };

    if (state && state.results) {
      this.results = state.results.map(result => {
        return {
          ...result,
          endDate: new Date(result.endDate),  // Ensure endDate is a Date object
        };
      });
    }
  }

  ngOnInit(): void {
    // Load data into items for slick-carousel
    console.log('results: '+ this.results);
    console.log('items: ' +this.items);
    this.items = this.results.length ? this.results : Array(15).fill(0).map((_, i) => `Item ${i + 1}`);
  }

  ngAfterViewInit() {
    this.initSlickCarousel('.result-list-slider', {
      dots: true,
      infinite: true,
      speed: 300,
      rows: 5,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }

  private initSlickCarousel(selector: string, options: any): void {
    
    if (typeof window !== 'undefined') { // Ensure this runs only in the browser
      import('slick-carousel').then(() => {
        $(selector).slick(options);
      }).catch(error => console.error('Error loading slick-carousel:', error));
    }
  }

  applyNow(jobId: string): void {
    console.log('jobId: ' + jobId);
    this.router.navigate(['/job-post-detail'], { state: { jobId: jobId } });
  }
}
