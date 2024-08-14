import { Component } from '@angular/core';
import { Authservice } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``,
})
export class LayoutPageComponent {
  public sidebarItem = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ];

  constructor(
    private authservice: Authservice,
    private router: Router
  ) {}

  onLogout(): void {
    this.authservice.logout();
    this.router.navigate(['/auth/login'])
  }

  get user(): User | undefined {
    return this.authservice.CurrentUser;
  }
}
