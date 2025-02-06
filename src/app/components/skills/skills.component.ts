import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  standalone: true
})
export class SkillsComponent {

  skillsLeft = [
    { category: 'Front-end', items: [' JavaScript', 'React.js', 'Angular.js', 'Vue.js'] },
    { category: 'Back-end', items: [' PHP', 'Laravel', 'C#', '.NET', 'Python', 'Node.js'] },
    { category: 'Mobile development', items: [' Ionic', 'Kotlin'] }
  ];

  skillsRight = [
    { category: 'Software', items: [' Java', 'C#', '.NET'] },
    { category: 'Database', items: [' MySQL', 'GraphQL'] },
    { category: 'Hardware', items: [' Arduino'] }
  ];
}
