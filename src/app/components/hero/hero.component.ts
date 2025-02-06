import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  standalone: true
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const selectTyped = document.querySelector('.typed') as HTMLElement;
    if (selectTyped) {
      const typedStrings = selectTyped.getAttribute('data-typed-items')?.split(',') || [];
      new Typed('.typed', {
        strings: typedStrings,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
      });
    }
  }
}
