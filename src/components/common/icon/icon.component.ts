import { NgClass, NgStyle } from '@angular/common'
import { Component, Input } from '@angular/core'
import { IconName } from '@fortawesome/fontawesome-common-types'

@Component({
	selector: 'app-icon',
	standalone: true,
	imports: [NgClass, NgStyle],
	templateUrl: './icon.component.html',
	styleUrl: './icon.component.scss',
})
export class IconComponent {
	@Input({ required: true }) name!: IconName | IconName[]
	@Input() size: number = 16
	@Input() color: string = 'white'

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
