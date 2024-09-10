import { DashboardComponent } from '@screens/dashboard/dashboard/dashboard.component'
import { EventsComponent } from '@screens/events/events/events.component'
import { Routes } from '@angular/router'
import { eventsRoutes } from '@routes/events.routes'

export const dashboardRoutes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [...eventsRoutes],
	},
]
