import { Routes } from '@angular/router';
import { AuthGuard } from '../../../core/guards/auth.guard';

export const bodyRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('../../../features/home/home/home').then(m => m.Home ),
        title: 'Home',
        canActivate: [AuthGuard]
    },
    {
        path: 'about',
        loadComponent: () => import('../../../features/aboutus/aboutus/aboutus').then(m => m.Aboutus ),
        title: 'About Us',
    },
    {
        path: 'category/:id',
        loadComponent: () => import('../../../features/category/category/category').then(m => m.CategoryComponent ),
        title: 'Category',
        canActivate: [AuthGuard]
    },
    {
        path: 'contact',
        loadComponent: () => import('../../../features/contactus/contactus/contactus').then(m => m.Contactus ),
        title: 'Contact Us'
    },
    {
        path: 'login',
        loadComponent: () => import('../../../features/login/login').then(m => m.Login ),
        title: 'Login'
    }
];