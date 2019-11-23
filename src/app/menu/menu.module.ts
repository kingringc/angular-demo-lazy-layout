import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';

@NgModule({
    declarations: [MenuComponent],
    entryComponents: [],
    exports: [MenuComponent],
    imports: [
        MatButtonModule,
        MatDividerModule,
        MatToolbarModule,
        RouterModule
    ]
})
export class MenuModule {
}
