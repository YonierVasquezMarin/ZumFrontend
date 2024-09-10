import { EventDetailComponent } from '@screens/events/event-detail/event-detail.component'
import { EventsComponent } from '@screens/events/events/events.component'
import { Routes } from '@angular/router'

export const eventsRoutes: Routes = [
	{
		path: 'events',
		component: EventsComponent,
	},
	{
		path: 'events/create-event',
		component: EventDetailComponent,
	},
]
