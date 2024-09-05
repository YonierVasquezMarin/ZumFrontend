import { SideBarComponent } from '@screens/dashboard/side-bar/side-bar.component'
import { HeaderComponent } from '@screens/dashboard/header/header.component'
import { RouterOutlet } from '@angular/router'
import { Component } from '@angular/core'

@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [RouterOutlet, HeaderComponent, SideBarComponent],
	templateUrl: './dashboard.component.html',
	styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
