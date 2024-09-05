import { Routes } from '@angular/router'
import { DashboardComponent } from '@screens/dashboard/dashboard.component'
import { EventsComponent } from '@screens/events/events/events.component'

export const dashboardRoutes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: '',
				redirectTo: 'events',
				pathMatch: 'full',
			},
			{
				path: 'events',
				component: EventsComponent,
			},
		],
	},
]
