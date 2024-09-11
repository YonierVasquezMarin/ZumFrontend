import { EmptyListMessageComponent } from '@common-components/empty-list-message/empty-list-message.component'
import { EventListComponent } from '@specific-components/events/event-list/event-list.component'
import { PaginationComponent } from '@common-components/pagination/pagination.component'
import { PaginatedRequestDto } from '@dtos/paginated.dtos'
import { EventsService } from '@services/events.service'
import { ActivatedRoute, Router } from '@angular/router'
import { HttpStatusCode } from '@angular/common/http'
import { EventResponseDto } from '@dtos/events.dtos'
import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'app-events',
	standalone: true,
	imports: [CommonModule, EventListComponent, EmptyListMessageComponent, PaginationComponent],
	templateUrl: './events.component.html',
	styleUrl: './events.component.scss',
})
export class EventsComponent implements OnInit {
	totalPages: number = 0
	filters: PaginatedRequestDto<{}> = {
		page: 1,
		pageSize: 6,
		values: {},
	}

	events: EventResponseDto[] = []

	constructor(
		private eventsService: EventsService,
		private router: Router,
		private route: ActivatedRoute,
	) {}

	ngOnInit(): void {
		this.getEvents()
	}

	async getEvents() {
		var response = await this.eventsService.getAllPaginated(this.filters)
    if(response.statusCode !== HttpStatusCode.Ok) console.error(response.message)
		this.events = response.data.data
		this.totalPages = response.data.totalPages
	}

	eventListEmpty() {
		return this.events.length === 0
	}

	onPageChange(newPage: number) {
		this.filters.page = newPage
		this.getEvents()
	}

	redirectToCreateEvent() {
		this.router.navigate(['create-event'], { relativeTo: this.route })
	}
}
