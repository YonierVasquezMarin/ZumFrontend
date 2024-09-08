import { IconComponent } from '@common-components/icon/icon.component'
import { CommonModule, NgStyle } from '@angular/common'
import { Component, Input } from '@angular/core'
import { BubbleType } from '@type/bubble.type'
import { IconType } from '@type/icon.type'

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [CommonModule, IconComponent, NgStyle],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss',
})
export class ButtonComponent {
	@Input() text: string = ''
	@Input() tooltip: string = ''
	@Input() leftIcon!: IconType
	@Input() rightIcon!: IconType
	@Input() buttonClass: string = ''
	@Input() leftBubble!: BubbleType
	@Input() rightBubble!: BubbleType
	@Input() disabled: boolean = false
	@Input() btnActive?: boolean
	@Input() align: 'left' | 'center' | 'right' = 'center'
	@Input() type: 'default' | 'disabled' | 'outline' = 'default'

	get buttonClasses() {
		let classes = this.buttonClass
		if (this.btnActive) classes += ' button-active'
		return classes
	}
}
