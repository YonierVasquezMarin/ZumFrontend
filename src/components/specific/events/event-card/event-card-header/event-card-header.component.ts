import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeComponent } from '@common-components/badge/badge.component';
import { ButtonComponent } from '@common-components/button/button.component';
import { StatusBadgeType } from '@type/status-badge.type';

@Component({
  selector: 'app-event-card-header',
  standalone: true,
  imports: [CurrencyPipe ,BadgeComponent, ButtonComponent],
  templateUrl: './event-card-header.component.html',
  styleUrl: './event-card-header.component.scss'
})
export class EventCardHeaderComponent {
  @Input({required: true}) assignedBudget!:number
  @Input({required: true}) status!: number;
  @Input({required: true}) number!: number;



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
    2: 'CotizadO',
    3: 'Aprobado',
    4: 'Rechazado',
    5: 'Cancelado',
    6: 'En proceso',
    7: 'Finalizado',

  }

  get statusType() {
    return this.statusColorByStatus[this.status];
  }

  get statusName() {
    return this.statusNameByStatus[this.status];
  }

  get numberEvent(){
    return `N° ${this.number}`;
  }

}
