import { SideBarComponent } from '@screens/dashboard/side-bar/side-bar.component'
import { IconComponent } from '@common-components/icon/icon.component'
import { Component, ElementRef, HostListener } from '@angular/core'

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [IconComponent, SideBarComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	sideBarIsOpen = false

	constructor(private elementRef: ElementRef) {}

	toggleSideBar() {
		this.sideBarIsOpen = !this.sideBarIsOpen
	}

	@HostListener('document:click', ['$event'])
	onDocumentClick(event: Event): void {
		if (this.sidebarIsOpenAndUserTouchedOutsideOfThis(event)) {
			this.toggleSideBar()
		}
	}

	sidebarIsOpenAndUserTouchedOutsideOfThis(event: Event): boolean {
		return this.sideBarIsOpen && this.sideBarParentIsTouched(event)
	}

	sideBarParentIsTouched(event: Event): boolean {
		const targetElement = event.target as HTMLElement
		return targetElement == targetElement.closest('app-side-bar')
	}
}
