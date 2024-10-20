import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NgFor } from '@angular/common';
import jQuery from 'jquery';

const $ = jQuery;

@Component({
  selector: 'app-applicant-list',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgFor],
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.scss']
})
export class ApplicantListComponent implements AfterViewInit {
  items = Array(15).fill(0).map((_, i) => `Item ${i + 1}`);

  constructor() {}

  ngAfterViewInit() {
    this.initSlickCarousel('.post-list', {
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
