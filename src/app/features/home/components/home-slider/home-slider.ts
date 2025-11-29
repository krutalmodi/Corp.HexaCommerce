import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CarouselSlide {
  id: number;
  title: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-home-slider',
  imports: [CommonModule],
  templateUrl: './home-slider.html',
  styleUrl: './home-slider.less',
})
export class HomeSlider implements OnInit, OnDestroy {
  currentSlide = signal(0);
  autoplayInterval: any;

  slides: CarouselSlide[] = [
    {
      id: 1,
      title: 'Summer Collection',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=500&fit=crop',
      description: 'Discover our latest summer products',
    },
    {
      id: 2,
      title: 'New Arrivals',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=500&fit=crop',
      description: 'Fresh styles just arrived',
    },
    {
      id: 3,
      title: 'Special Offer',
      image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=1200&h=500&fit=crop',
      description: 'Limited time deals',
    },
  ];

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  nextSlide() {
    this.currentSlide.set((this.currentSlide() + 1) % this.slides.length);
  }

  prevSlide() {
    this.currentSlide.set(
      (this.currentSlide() - 1 + this.slides.length) % this.slides.length
    );
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
    this.stopAutoplay();
    this.startAutoplay();
  }
}
