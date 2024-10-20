import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NgFor } from '@angular/common';
import jQuery from 'jquery';

const $ = jQuery;

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgFor],
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements AfterViewInit {
  items = Array(15).fill(0).map((_, i) => `Item ${i + 1}`);

  constructor() {}

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

  private initSlickCarousel(selector: string, options: any) {
    if (typeof window !== 'undefined') { // Ensure this runs only in the browser
      import('slick-carousel').then(() => {
        $(selector).slick(options);
      }).catch(error => console.error('Error loading slick-carousel:', error));
    }
  }
}
