import { Routes } from '@angular/router'

export const appRoutes: Routes = [
	{
		path: '',
		loadChildren: () => import('@routes/auth.routes').then((m) => m.authRoutes),
	},
]
