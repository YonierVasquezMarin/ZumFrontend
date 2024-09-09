import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EventResponseDto } from '@dtos/events.dtos';

@Component({
  selector: 'app-event-card-information',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './event-card-information.component.html',
  styleUrl: './event-card-information.component.scss'
})
export class EventCardInformationComponent {
  @Input({required: true}) event!: EventResponseDto;

  getFormattedDate(dateString: string, timeString: string): Date {
    const date = new Date(dateString);
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    date.setHours(hours, minutes, seconds);
    return date;
  }

  getEnableBugeget(event: EventResponseDto): number {
    return event.assignedBudget - event.spentBudget;
  }
  
}
