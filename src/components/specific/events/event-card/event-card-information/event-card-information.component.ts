import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EventResponseDto } from '@dtos/events.dtos';

@Component({
  selector: 'app-event-card-information',
  standalone: true,
  imports: [DatePipe, ],
  templateUrl: './event-card-information.component.html',
  styleUrl: './event-card-information.component.scss'
})
export class EventCardInformationComponent {
  @Input({required: true}) event!: EventResponseDto;

  getFormattedDate(date:Date, time: string): Date {
      const completeDate = new Date(date + 'T' + time);
      return completeDate;
  }
}
