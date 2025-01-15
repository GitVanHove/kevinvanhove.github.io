import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as portfolioData from '../../../assets/content/portfolio.json';

@Component({
  selector: 'app-details',
  imports: [ CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetailsComponent {

  itemId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  portfolioData: any = (portfolioData as any).default; // Access the JSON content
  projectDetails: any;

  

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.projectDetails = this.portfolioData.portfolioDetails.find((item: any) => item.id === 1);
  }


}
