import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventCardHeaderComponent } from '@specific-components/events/event-card/event-card-header/event-card-header.component';
import { EventCardInformationComponent } from '@specific-components/events/event-card/event-card-information/event-card-information.component';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [ CommonModule,EventCardHeaderComponent, EventCardInformationComponent],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  textButtonShowOption: string = 'Ver más';
  showOption: boolean = false;

  toggleShowOption() {
    this.showOption = !this.showOption;
    this.textButtonShowOption = this.showOption ? 'Ver menos' : 'Ver más';
  }
}
