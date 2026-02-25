import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { register } from 'swiper/element/bundle';


register();


@Component({
  selector: 'app-main-info',
  standalone: true,
  imports: [CommonModule, NgxTypedJsModule],
  templateUrl: './main-info.component.html',
  styleUrl: './main-info.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainInfoComponent {
  @ViewChild('swiperContainer', { static: true }) swiperContainer!: ElementRef;

  constructor(private router: Router) {

  }

  sliderImages = [
    'assets/images/moun1.jpg',
    'assets/images/moun2.avif',
  ];

  profileImage = 'assets/images/Me.png';

  socialIcons = [ 
    { class: 'fab fa-instagram', link: 'https://www.instagram.com/amer.habanakeh/' },
    { class: 'fab fa-github', link: 'https://github.com/AmerHabanakeh' },
    { class: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/in/amer-habanakeh-0928b7301' },
    { class: 'fab fa-whatsapp', link: 'https://wa.me/+963958345660?text=Hello%20I%20am%20interested%20in%20your%20services.' }
  ];

  ngAfterViewInit() {
    this.initSwiper();
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (this.swiperContainer?.nativeElement?.swiper) {
      this.swiperContainer.nativeElement.swiper.update();
    }
  }

  private initSwiper() {
    if (this.swiperContainer?.nativeElement) {
      Object.assign(this.swiperContainer.nativeElement, {
        slidesPerView: 1,
        effect: 'fade',
        speed: 1200,
        loop: true,
        autoplay: {
          delay: 500,
          disableOnInteraction: false,
        },
      });
      this.swiperContainer.nativeElement.initialize();
    }
  }

  contactMe() {
    this.router.navigate(['/contact'])
  }

  openPdf() {
    // Assuming your PDF is in assets folder as 'cv.pdf'
    const pdfUrl = '/assets/cv.pdf';

    // Open in new tab
    window.open(pdfUrl, '_blank');

    // Alternative: Force download instead of opening in new tab
    // const link = document.createElement('a');
    // link.href = pdfUrl;
    // link.download = 'Amer-Habanakeh-cv.pdf';
  }

}
