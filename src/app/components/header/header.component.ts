import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgFor, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true
})
export class HeaderComponent {
  // Tracks whether the header (mobile menu) is visible
  isHeaderVisible = false;

  // Define the menu items, with optional submenus
  navmenuItems = [
    { label: 'Home', link: '#hero', icon: 'bi bi-house',active: true },
    { label: 'About', link: '#about', icon: 'bi bi-person', active: false },
    { label: 'Resume', link: '#resume', icon: 'bi bi-file-earmark-text', active: false },
    { label: 'Portfolio', link: '#portfolio', icon: 'bi bi-images', active: false},
  ];

  // Toggles the visibility of the header
  toggleHeader(): void {
    this.isHeaderVisible = !this.isHeaderVisible;
  }

  // Handles clicking on a navigation item
  onNavItemClick(item: any): void {
    // Update active state for clicked item
    this.navmenuItems.forEach(navItem => (navItem.active = false));
    item.active = true;

    // Close the header if visible
    if (this.isHeaderVisible) {
      this.toggleHeader();
    }
  }
}
