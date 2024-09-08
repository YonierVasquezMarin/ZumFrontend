import { MenuItemType } from '@type/menu-item.type'
import { Component } from '@angular/core'
import { ButtonComponent } from '@common-components/button/button.component'

@Component({
	selector: 'app-menu-list',
	standalone: true,
	imports: [ButtonComponent],
	templateUrl: './menu-list.component.html',
	styleUrl: './menu-list.component.scss',
})
export class MenuListComponent {
	menuItems: MenuItemType[] = [
		{
			name: 'Eventos',
			icon: 'calendar-alt',
			route: '/events',
		},
		{
			name: 'Notificaciones',
			icon: 'bell',
			route: '/notifications',
			bubble: 26,
		},
	]

	logout() {
		console.log('logout')
	}

	toggleMenu() {
		console.log('toggleMenu')
	}
}
