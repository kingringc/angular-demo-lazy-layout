import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-alert',
    template: ``
})
export class AppAlertComponent implements OnInit {

    constructor(private readonly _snackBar: MatSnackBar) {}

    @Input()
    set displayMessage(message: {[key: string]: string}) {
        if (message) {
            this._snackBar.open(message.serverMessage, 'Dismiss', { duration: 9000});
        }
    }

    ngOnInit(): void {
    }

}