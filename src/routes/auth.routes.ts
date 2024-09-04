import { Routes } from '@angular/router'
import { LoginComponent } from '@screens/auth/login/login.component'

export const authRoutes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
	},
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    }
]
