import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-roadmap',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './roadmap.html',
  styleUrl: './roadmap.css'
})
export class Roadmap {
formData: any = {};
roadmap: any[] = [];

  ngOnInit() {
    const data = localStorage.getItem('formData');
    if (data) {
      this.formData = JSON.parse(data);
      this.roadmap = this.generateMockRoadmap();
    }
  }

  generateMockRoadmap() {
    return [
      { title: 'Week 1-2', topic: `Basics of ${this.formData.interest}`, resource: 'https://example.com/basics' },
      { title: 'Week 3-4', topic: 'Intermediate Projects', resource: 'https://example.com/projects' },
      { title: 'Week 5+', topic: 'Build Your Portfolio', resource: 'https://example.com/portfolio' },
    ];
  }
}

