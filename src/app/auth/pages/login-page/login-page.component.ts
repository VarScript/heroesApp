import { Component } from '@angular/core';
import { Authservice } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  constructor(
    private authService: Authservice,
    private router: Router
  ) {}

  onLogin(): void {
    this.authService.login('fabiovargas@gmail.com', '12342345')
      .subscribe( user => {
        this.router.navigate(['/'])
      })
  }
}
