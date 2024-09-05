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
	@Input({ required: true }) name!: IconName
	@Input() size: number = 32
	@Input() color: string = 'white'
}
