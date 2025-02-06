import { AfterViewInit, Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    AOS.init(
      {
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      }
    );

    
  }
}