import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad,CanActivate {
  
  constructor(
    private authService:AuthService,
    private router:Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   if (this.authService.auth) {
    //     return true
    //   }
    // return false;
    console.log('can Activate');
      return this.authService.verificaAutenticacion()
              .pipe(
                tap(estaAutenticado=>{
                  if (!estaAutenticado) {
                    this.router.navigate(['./auth/login'])
                  }
                })
              );
    }
    canLoad(
      route: Route,
      segments: UrlSegment[]): Observable<boolean> | boolean {
        // if (this.authService.auth) {
        //   return true
        // }
        // return false;
        return this.authService.verificaAutenticacion()
                .pipe(
                  tap(estaAutenticado=>{
                    if (!estaAutenticado) {
                      this.router.navigate(['./auth/login'])
                    }
                  })
                );
  }
}
