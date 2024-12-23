import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  itemId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id'); // Get the dynamic ID
  }
}
