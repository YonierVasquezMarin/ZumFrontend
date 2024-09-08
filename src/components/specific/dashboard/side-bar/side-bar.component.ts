import { UserInfoComponent } from '@specific-components/side-bar/user-info/user-info.component'
import { MenuListComponent } from '@specific-components/side-bar/menu-list/menu-list.component'
import { Component } from '@angular/core'

@Component({
	selector: 'app-side-bar',
	standalone: true,
	imports: [UserInfoComponent, MenuListComponent],
	templateUrl: './side-bar.component.html',
	styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {}
