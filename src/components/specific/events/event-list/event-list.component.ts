import { EventCardComponent } from '../event-card/event-card.component';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EventResponseDto } from '@dtos/events.dtos';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule, EventCardComponent],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent {
  @Input({required: true}) events!: EventResponseDto[];
}
