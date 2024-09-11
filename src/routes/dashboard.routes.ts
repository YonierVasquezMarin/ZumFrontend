import { DashboardComponent } from '@screens/dashboard/dashboard/dashboard.component'
import { eventsRoutes } from '@routes/events.routes'
import { Routes } from '@angular/router'

export const dashboardRoutes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [...eventsRoutes],
	},
]
