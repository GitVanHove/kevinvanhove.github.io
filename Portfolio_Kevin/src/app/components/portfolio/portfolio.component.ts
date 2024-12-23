import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  standalone: true 
})
export class PortfolioComponent {
  portfolioItems = [
    {
      title: 'Este | Website',
      description: 'Self made website for landscaping architect',
      image: 'assets/img/portfolio/este_Startpage.png',
      category: 'filter-web',
      link: 'portfolio-details.html'
    },
    {
      title: 'Game Project',
      description: 'An indie game in development.',
      image: 'assets/img/portfolio/game.png',
      category: 'filter-misc',
      link: '#'
    },
    {
      title: 'IoT Project',
      description: 'A hardware project for smart homes.',
      image: 'assets/img/portfolio/iot.png',
      category: 'filter-hardware',
      link: '#'
    }
  ];

  // Currently selected filter
  selectedFilter = '*';

  // Filter items based on the selected filter
  getFilteredItems() {
    if (this.selectedFilter === '*') {
      return this.portfolioItems;
    }
    return this.portfolioItems.filter(item => item.category === this.selectedFilter);
  }

  // Change the selected filter
  setFilter(filter: string) {
    this.selectedFilter = filter;
  }
}
