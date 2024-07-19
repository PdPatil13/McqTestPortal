import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-begin-test',
  templateUrl: './begin-test.component.html',
  styleUrl: './begin-test.component.css'
})
export class BeginTestComponent {
  email!: string;
  showError: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router) {}

  beginTest() {
    if (this.validateEmail(this.email)) {
      document.cookie = `email=${this.email}`;
      this.router.navigate(['/question']);
    } else {
      // alert('Please enter a valid email');
      this.errorMessage = 'Please enter a valid email';
      this.showError = true;
    }
  }

  validateEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(email);
  }
}
