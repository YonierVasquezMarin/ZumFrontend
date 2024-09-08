import { IconComponent } from '@common-components/icon/icon.component'
import { CommonModule, NgStyle } from '@angular/common'
import { Component, Input } from '@angular/core'
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
	@Input() leftIcon!: IconType
	@Input() rightIcon!: IconType
	@Input() buttonClass: string = ''
	@Input() disabled: boolean = false
	@Input() type: 'default' | 'disabled' | 'outline' = 'default'
	@Input() tooltip: string = ''
	@Input() align: 'left' | 'center' | 'right' = 'center'
}
