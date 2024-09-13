import { EventDetailComponent } from '@screens/events/event-detail/event-detail.component'
import { EventsComponent } from '@screens/events/events/events.component'
import { Routes } from '@angular/router'

const baseRoute = 'events'

export const eventsRoutes: Routes = [
	{
		path: baseRoute,
		component: EventsComponent,
	},
	{
		path: baseRoute + '/create-event',
		component: EventDetailComponent,
	},
	{
		path: baseRoute + '/edit-event/:id',
		component: EventDetailComponent,
	}
]
