import { Routes } from '@angular/router'

export const authRoutes: Routes = [
	{
		path: 'login',
		loadComponent: () => import('@screens/auth/login/login.component').then((m) => m.LoginComponent),
	},
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    }
]
