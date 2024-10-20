import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import jQuery from 'jquery';

const $ = jQuery;

@Injectable({
  providedIn: 'root'
})
export class SlickCarouselService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  initSlickCarousel(selector: string, options: any) {
    if (isPlatformBrowser(this.platformId)) {
      import('slick-carousel').then(() => {
        $(selector).slick({
          options,
       
      })
      }).catch(error => console.error('Error loading slick-carousel:', error));
    }
  }
}
