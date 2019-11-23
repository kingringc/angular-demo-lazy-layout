import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/User';
import { UserService } from 'src/app/services';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
    userForm: FormGroup;
    message: {[key: string]: string};
    addUser(): void {
        const userData: User = this.userForm.value;
        this.userService.addUser(userData)
            .subscribe(data => {
                this.message = { serverMessage: 'Success ! user added.'};
                this.initUserForm();
            });
    }
    constructor(private readonly fb: FormBuilder,
        private userService: UserService) {}
    initUserForm(): void {
        this.userForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
            lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
            id: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
        });
    }
    ngOnInit(): void {
        this.initUserForm();
    }
    resetUserForm(): void {
        this.initUserForm();
    }
}
