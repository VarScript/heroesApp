import { Injectable } from '@angular/core';
import {
  CanActivateFn,
  CanMatchFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  Route,
  UrlSegment,
} from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Authservice } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class PublicGuard {
  constructor(private authService: Authservice, private router: Router) {}

  private redirectIfAuthenticated(): boolean | Observable<boolean> {
    return this.authService.checkAuthentication().pipe(
      tap((isAuthenticated) => {
        if (isAuthenticated) {
          this.router.navigate(['./']);
        }
      }),
      map((isAuthenticated) => !isAuthenticated)
    );
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): boolean | Observable<boolean> {
    // console.log('CanMatch');
    // console.log(route, segments);

    return this.redirectIfAuthenticated();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    // console.log('CanActivate');
    // console.log(route, state);

    return this.redirectIfAuthenticated();
  }
}
