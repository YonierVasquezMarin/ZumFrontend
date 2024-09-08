import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { StatusBadgeType } from '@type/status-badge.type';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  @Input() text: string | null = 'Badge'; //
  @Input() type: StatusBadgeType = 'primary'; 
}
