import { Component, AfterViewInit, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NgFor } from '@angular/common';
import jQuery from 'jquery';
import { HttpClient } from '@angular/common/http';

const $ = jQuery;

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgFor],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  jobPosts: any[] = [];
  slickConfig: any = {
    dots: true,
    infinite: true,
    speed: 300,
    rows: 3,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.slick-prev',
    nextArrow: '.slick-next'
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/api/jobposts/list').subscribe(
      data => {
        if (data) {
          this.jobPosts = data;
          this.initializeSlickCarousel();
        } else {
          console.error('No data received from API');
        }
      },
      error => {
        console.error('Error fetching job posts:', error);
      }
    );
  }

  initializeSlickCarousel() {
    setTimeout(() => {
      $('.your-carousel-class').slick(this.slickConfig);
    }, 0);
  }
}
