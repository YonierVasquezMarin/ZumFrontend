import { EventContractComponent } from '@specific-components/event-detail/event-contract/event-contract.component'
import { EventInfoComponent } from '@specific-components/event-detail/event-info/event-info.component'
import { SlidesComponent } from '@common-components/slides/slides.component'
import { Component } from '@angular/core'

@Component({
	selector: 'app-event-detail',
	standalone: true,
	imports: [SlidesComponent, EventInfoComponent, EventContractComponent],
	templateUrl: './event-detail.component.html',
	styleUrl: './event-detail.component.scss',
})
export class EventDetailComponent {
	slides = [EventInfoComponent, EventContractComponent]
}
