import { Component } from '@angular/core';
import { BadgeComponent } from '@common-components/badge/badge.component';
import { ButtonComponent } from '@common-components/button/button.component';

@Component({
  selector: 'app-event-card-header',
  standalone: true,
  imports: [BadgeComponent, ButtonComponent],
  templateUrl: './event-card-header.component.html',
  styleUrl: './event-card-header.component.scss'
})
export class EventCardHeaderComponent {

}
