import { BadgeComponent } from '@common-components/badge/badge.component'
import { NgClass, NgIf, NgStyle } from '@angular/common'
import { Component, Input } from '@angular/core'
import { BubbleType } from '@type/bubble.type'
import { IconType } from '@type/icon.type'

@Component({
	selector: 'app-icon',
	standalone: true,
	imports: [NgClass, NgStyle, BadgeComponent, NgIf],
	templateUrl: './icon.component.html',
	styleUrl: './icon.component.scss',
})
export class IconComponent {
	@Input({ required: true }) name!: IconType
	@Input() color: string = 'white'
	@Input() bubble!: BubbleType
	@Input() size: number = 16

	get iconClasses() {
		let classes = ['fas']
		if (Array.isArray(this.name)) {
			classes.push(...this.name.map((name) => 'fa-' + name))
		} else {
			classes.push('fa-' + this.name)
		}
		return classes
	}
}
