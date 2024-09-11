import { Routes } from '@angular/router'
import { loggedGuard, loggoutGuard } from '../guards/logged.guard'

export const appRoutes: Routes = [
	{
		path: '',
		loadChildren: () => import('@routes/auth.routes').then((m) => m.authRoutes),
		canActivate: [loggoutGuard]
	},
	{
		path: 'dashboard',
		loadChildren: () => import('@routes/dashboard.routes').then((m) => m.dashboardRoutes),
		canActivate: [loggedGuard]
	},
]
