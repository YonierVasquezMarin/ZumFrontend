import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BadgeComponent } from '@common-components/badge/badge.component';
import { ButtonComponent } from '@common-components/button/button.component';
import { EventResponseDto } from '@dtos/events.dtos';
import { StatusBadgeType } from '@type/status-badge.type';

@Component({
  selector: 'app-event-card-header',
  standalone: true,
  imports: [CurrencyPipe ,BadgeComponent, ButtonComponent],
  templateUrl: './event-card-header.component.html',
  styleUrl: './event-card-header.component.scss'
})
export class EventCardHeaderComponent {
 @Input({required: true}) event!: EventResponseDto;

  constructor(private router: Router, private route: ActivatedRoute) {}

  statusColorByStatus: { [key: number]: StatusBadgeType} = {
    1: 'primary',
    2: 'secondary',
    3: 'success',
    4: 'danger',
    5: 'dark',
    6: 'info',
    7: 'light',
  };

  statusNameByStatus: { [key: number]: string } = {
    1: 'En cotización',
    2: 'Cotizado',
    3: 'Aprobado',
    4: 'Rechazado',
    5: 'Cancelado',
    6: 'En proceso',
    7: 'Finalizado',

  }

  get statusType() {
    return this.statusColorByStatus[this.event.status];
  }

  get statusName() {
    return this.statusNameByStatus[this.event.status];
  }

  get numberEvent(){
    return `N° ${this.event.eventNumber}`;
  }

  openEventDetail() {
    this.router.navigate([`edit-event/${this.event.eventId}`], { relativeTo: this.route });
  }

}
