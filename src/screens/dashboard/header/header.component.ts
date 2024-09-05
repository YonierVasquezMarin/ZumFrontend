import { IconComponent } from '@common-components/icon/icon.component'
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
