import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-get-started',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './get-started.html',
  styleUrl: './get-started.css'
})
export class GetStarted {
    formData = {
    interest: '',
    duration: '',
    aim: '',
    purpose: '',
    level: ''
  };

  constructor(private router: Router) {}

  generateRoadmap() {
    localStorage.setItem('formData', JSON.stringify(this.formData));
    this.router.navigate(['/roadmap']);
  }
}



