import { Component } from '@angular/core';
// Import statement at the top of main-carousel.component.ts
import { homeCarouselData } from '../../Data/mainCarousel';


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
    this.carouselData = homeCarouselData;
    this.autoPlay()
  }

  autoPlay() {
    setInterval(() => {
      this.nextSlide();
    }, 3000)
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }
}
