import { Component } from '@angular/core';
import { EventListComponent } from '@specific-components/events/event-list/event-list.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [EventListComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {

}
