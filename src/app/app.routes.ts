import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/login/home/home.component';
import { LayoutComponent } from './feature/layout/layout.component';
import { AuthGuard } from './guards/auth.guard';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { 
        path: '', 
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'user', component: UserComponent },
            // { path: 'product', component: ProductComponent },
            // { path: 'list', component: ListComponent}
        ]
    },
    { path: '**', redirectTo: '/login' }
];
