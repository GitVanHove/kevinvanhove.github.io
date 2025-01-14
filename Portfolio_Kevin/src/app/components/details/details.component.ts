import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [NgFor],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetailsComponent {

  itemId: string | null = null;

  constructor(private route: ActivatedRoute) {}


  /*swiperConfig = {
    loop: true,
    speed: 600,
    autoplay: {
      delay: 5000,
    },
    navigation: true,
    pagination: {
      clickable: true,
    },
  };*/

  slides = [
    { image: '/assets/img/portfolio/app-1.jpg' },
    { image: '/assets/img/portfolio/product-1.jpg' },
    { image: '/assets/img/portfolio/branding-1.jpg' },
    { image: '/assets/img/portfolio/books-1.jpg' },
  ];

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id'); // Get the dynamic ID
  }

}
