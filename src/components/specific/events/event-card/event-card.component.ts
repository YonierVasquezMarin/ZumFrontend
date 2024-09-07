import { Component } from '@angular/core';
import { BadgeComponent } from '@common-components/badge/badge.component';
import { ButtonComponent } from '@common-components/button/button.component';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [BadgeComponent, ButtonComponent],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {

}
