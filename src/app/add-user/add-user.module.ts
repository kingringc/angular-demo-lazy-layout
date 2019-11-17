import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AddUserRoutingModule } from './add-user-routing.module';
import { AddUserComponent } from './components/add-user/add-user.component';

@NgModule({
    declarations: [AddUserComponent],
    entryComponents: [AddUserComponent],
    imports: [
        AddUserRoutingModule,
        FormsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    exports: [AddUserComponent]
})
export class AddUserModule {
}
