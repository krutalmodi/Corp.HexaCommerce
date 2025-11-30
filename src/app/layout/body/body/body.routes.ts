import { Routes } from '@angular/router';

export const bodyRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('../../../features/home/home/home').then(m => m.Home ),
        title: 'Home'
    },
    {
        path: 'about',
        loadComponent: () => import('../../../features/aboutus/aboutus/aboutus').then(m => m.Aboutus ),
        title: 'About Us'
    },
    {
        path: 'category/:name',
        loadComponent: () => import('../../../features/category/category/category').then(m => m.Category ),
        title: 'Category'
    },
    {
        path: 'contact',
        loadComponent: () => import('../../../features/contactus/contactus/contactus').then(m => m.Contactus ),
        title: 'Contact Us'
    }
];