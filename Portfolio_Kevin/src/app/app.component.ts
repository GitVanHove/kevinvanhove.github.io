import { AfterViewInit, Component } from '@angular/core';
import AOS from 'aos';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ResumeComponent,
    SkillsComponent,
    PortfolioComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
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