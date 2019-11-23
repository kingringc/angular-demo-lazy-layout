import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../shared/User';
import { LoggerService } from './logger.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private url = 'api/users';
    httpOptions = { headers: new HttpHeaders({'content-type': 'application/json'}) };
    constructor(private readonly http: HttpClient, private loggerService: LoggerService) {
    }
    getUsers(): Observable<any> {
        return this.http.get(this.url)
            .pipe(
                tap(() => this.loggerService.info('Fetching user list.'))
            );
    }
    addUser(user: User): Observable<any> {
        return this.http.post(this.url, user, this.httpOptions)
            .pipe(
                tap(() => this.loggerService.info('Adding new user.'))
            );
    }
}
