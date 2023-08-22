import { Component } from '@angular/core';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent {
  carouselData: any

  currentSlide = 0;
  interval: any;

  ngOnInit() {
    this.carouselData = homeCarouselData
  }

  autoPlay() {
    setInterval(() => {
      this.nextSlide();
    }, 2000)
  }

  nextSlide() {
    this.currentSlide = this.currentSlide % this.carouselData.length
  }
}