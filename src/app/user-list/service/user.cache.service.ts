import { Injectable } from '@angular/core';
import { UserService } from 'src/app/services';
import { User } from 'src/app/shared/User';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserCache {
    userList: Observable<User[]>;
    constructor(private userService: UserService) {}
    getUsers() {
        if (this.userList) {
            return of(this.userList);
        }
        const users$ = this.userService.getUsers()
            .pipe(
                map(users => this.userList = users)
            );
        return users$;
    }
    fetchNewData() {
        const users$ = this.userService.getUsers()
            .pipe(
                map(users => this.userList = users)
            );
        return users$;
    }
}
