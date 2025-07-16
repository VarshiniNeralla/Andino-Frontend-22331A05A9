import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  email = '';
  password = '';

  constructor(private router: Router) {}

  signup() {
    if (this.email && this.password) {
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/']);
    } else {
      alert('Fill all fields');
    }
  }
}



