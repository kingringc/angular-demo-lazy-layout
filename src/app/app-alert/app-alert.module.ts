import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppAlertComponent } from './components';

@NgModule({
    declarations: [AppAlertComponent],
    entryComponents: [],
    exports: [AppAlertComponent],
    imports: [MatSnackBarModule]
})
export class AppAlertModule {

}