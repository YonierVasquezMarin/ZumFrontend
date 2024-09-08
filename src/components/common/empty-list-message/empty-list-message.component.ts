import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-list-message',
  standalone: true,
  imports: [],
  templateUrl: './empty-list-message.component.html',
  styleUrl: './empty-list-message.component.scss'
})
export class EmptyListMessageComponent {
  @Input({required: true}) elementName!: string;
}
