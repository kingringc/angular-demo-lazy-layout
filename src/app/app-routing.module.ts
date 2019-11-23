import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'add',
        loadChildren: () => import('./add-user/add-user.module').then(m => m.AddUserModule)
    },
    {
        path: 'users',
        loadChildren: () => import('./user-list/user-list.module').then(m => m.UserListModule)
    },
    {
        path: '',
        redirectTo: '/add',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/add',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
