import { ButtonComponent } from '@common-components/button/button.component'
import { AfterViewInit, Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { UsersService } from '@services/users.service'
import { MenuItemType } from '@type/menu-item.type'
import { filter } from 'rxjs'

@Component({
	selector: 'app-menu-list',
	standalone: true,
	imports: [ButtonComponent],
	templateUrl: './menu-list.component.html',
	styleUrl: './menu-list.component.scss',
})
export class MenuListComponent implements OnInit, AfterViewInit {
	constructor(private router: Router, private usersService: UsersService) {}

	menuItems: MenuItemType[] = [
		{
			name: 'Eventos',
			icon: 'calendar-alt',
			route: 'events',
		},
		{
			name: 'Notificaciones',
			icon: 'bell',
			route: 'notifications',
			bubble: 26,
		},
		{
			name: 'Menús',
			icon: 'table-cells-large',
			route: 'menus',
		},
		{
			name: 'Usuarios',
			icon: 'users',
			route: 'users',
		},
		{
			name: 'Contratos',
			icon: 'file-signature',
			route: 'contracts',
		},
		{
			name: 'Empresas',
			icon: 'building',
			route: 'companies',
		},
		{
			name: 'Reportes',
			icon: 'chart-column',
			route: 'reports',
		},
	]

	ngOnInit() {
		this.updateActiveMenuItem()
		this.defineItemActive()
	}

	defineItemActive() {
		this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
			this.updateActiveMenuItem()
		})
	}

	ngAfterViewInit() {
		this.checkAndNavigateToFirstItem()
	}

	checkAndNavigateToFirstItem() {
		const currentRoute = this.router.url

		if (currentRoute === '/dashboard') {
			this.router.navigate(['/dashboard/' + this.menuItems[0].route])
		}
	}

	updateActiveMenuItem() {
		const currentRoute = this.router.url
		this.menuItems.forEach((item) => {
			item.active = currentRoute.includes(item.route)
		})
	}

	navigate(route: string) {
		this.router.navigate(['/dashboard/' + route])
	}

	logout() {
		this.usersService.logout()
	}
}
