

import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ConnexionGuard implements CanActivate {

    constructor(private router: Router, private userService: DataService) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {

        return this.userService.collegueConnecte().pipe(
            map(collegue => { return true }),
            catchError((err) => {
                this.router.navigate(['/connexion']);
                throw err;
            })
        )
    }
}