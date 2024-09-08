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
		{
			name: 'Menús',
			icon: 'table-cells-large',
			route: '/menus',
		},
		{
			name: 'Usuarios',
			icon: 'users',
			route: '/users',
		},
		{
			name: 'Contratos',
			icon: 'file-signature',
			route: '/contracts',
		},
		{
			name: 'Empresas',
			icon: 'building',
			route: '/companies',
		},
		{
			name: 'Reportes',
			icon: 'chart-column',
			route: '/reports',
		},
	]

	logout() {
		console.log('logout')
	}

	toggleMenu() {
		console.log('toggleMenu')
	}
}
