import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmptyListMessageComponent } from '@common-components/empty-list-message/empty-list-message.component';
import { PaginationComponent } from '@common-components/pagination/pagination.component';
import { EventResponseDto } from '@dtos/events.dtos';
import { PaginatedRequestDto } from '@dtos/paginated.dtos';
import { EventsService } from '@services/events.service';
import { EventListComponent } from '@specific-components/events/event-list/event-list.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule ,EventListComponent, EmptyListMessageComponent, PaginationComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  totalPages: number = 0;
  filters : PaginatedRequestDto<{}> = {
    page: 1,
    pageSize: 6,
    values: {}
  };

  events : EventResponseDto[] = [];

  constructor(private eventsService : EventsService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getAllPaginated(this.filters).subscribe(response => {
      this.events = response.data.data;
      this.totalPages = response.data.totalPages;
    });
  }

  eventListEmpty() {
    return this.events.length === 0;
  }

  onPageChange(newPage: number) {
    this.filters.page = newPage;
    this.getEvents();
  }
}
