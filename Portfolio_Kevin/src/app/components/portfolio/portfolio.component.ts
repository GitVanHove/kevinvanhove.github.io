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
      link: 'detail/1'
    },
    {
      title: 'Godot Platformer',
      description: 'A fun platformer, a very first test project.',
      image: 'assets/img/portfolio/MainScene.png',
      category: 'filter-misc',
      link: 'detail/2'
    },
    {
      title: 'AI Project | Stable diffusion',
      description: 'Comfyui workflows and stabel diffusion',
      image: 'assets/img/portfolio/comfyui_start.png',
      category: 'filter-AI',
      link: 'detail/3'
    },
    {
      title : '.NET',
      description: '.NET powered back-end for a hypothetical renting business',
      image: 'assets/img/portfolio/swaggerUI.png',
      category: 'filter-software',
      link: 'detail/4'
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
