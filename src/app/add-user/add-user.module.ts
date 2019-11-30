import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule, MatIconModule } from '@angular/material';
import { AddUserRoutingModule } from './add-user-routing.module';
import { AppAlertModule } from '../app-alert';
import { AddUserComponent } from './components';

@NgModule({
    declarations: [AddUserComponent],
    entryComponents: [AddUserComponent],
    imports: [
        CommonModule,
        AddUserRoutingModule,
        AppAlertModule,
        FormsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule, 
        MatProgressSpinnerModule,
        MatIconModule
    ],
    exports: [AddUserComponent]
})
export class AddUserModule {
}
