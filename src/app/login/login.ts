import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if(this.email==="abc@test.com" && this.password==="admin") {
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/home']);
    } else {
      alert('Enter correct email and password');
    }
  }
}









// import { Component } from '@angular/core';
// import { Router, CommonModule } from '@angular/router';
// import { FormsModule } from '@angular/forms';

// @Component({
//   standalone: true,
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   imports: [CommonModule, FormsModule],
// })
// export class LoginComponent {

// }
