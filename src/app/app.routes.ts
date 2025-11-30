import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./layout/body/body/body.routes').then(m => m.bodyRoutes)
    }
];
