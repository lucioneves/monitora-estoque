import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/login/home/home.component';
import { LayoutComponent } from './feature/layout/layout.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { 
        path: '', 
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'news', component: HomeComponent }, // Adicione outras rotas necessárias
            { path: 'contact', component: HomeComponent } // Adicione outras rotas necessárias
        ]
    },
    { path: '**', redirectTo: '/login' }
];
