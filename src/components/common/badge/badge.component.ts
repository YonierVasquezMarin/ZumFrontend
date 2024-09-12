import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { IconComponent } from '@common-components/icon/icon.component';
import { IconType } from '@type/icon.type';
import { StatusBadgeType } from '@type/status-badge.type';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  @Input() text: string | null = 'Badge'; 
  @Input() type: StatusBadgeType = 'primary'; 
  @Input() icon: string = 'check-circle';
}
