import { SideBarComponent } from '@specific-components/dashboard/side-bar/side-bar.component'
import { IconComponent } from '@common-components/icon/icon.component'
import { Component, HostListener, OnInit } from '@angular/core'
import { NgStyle } from '@angular/common'

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [IconComponent, SideBarComponent, NgStyle],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
	sideBarIsOpen = false
	sideBarStyles = {}
	backgroundStyles = {}

	ngOnInit() {
		this.defineSideBarStyles()
	}

	toggleSideBar() {
		this.sideBarIsOpen = !this.sideBarIsOpen
		this.defineSideBarStyles()
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
		const targetElementIsSidebarContainer = targetElement.querySelector('app-side-bar')
		return targetElementIsSidebarContainer !== null
	}

	defineSideBarStyles() {
		if (this.sideBarIsOpen) {
			this.showBackground()
			this.showSideBarWithDelay()
		} else {
			this.hideSideBar()
			this.hideBackgroundWithDelay()
		}
	}

	showBackground() {
		this.backgroundStyles = {
			display: 'block',
		}
	}

	showSideBarWithDelay() {
		setTimeout(() => {
			this.sideBarStyles = {
				left: '0',
			}
		}, 100)
	}

	hideSideBar() {
		this.sideBarStyles = {
			left: '-280px',
		}
	}

	hideBackgroundWithDelay() {
		setTimeout(() => {
			this.backgroundStyles = {
				display: 'none',
			}
		}, 250)
	}
}
