import { IconComponent } from '@common-components/icon/icon.component'
import { IconName } from '@fortawesome/fontawesome-common-types'
import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [CommonModule, IconComponent],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss',
})
export class ButtonComponent {
	@Input() text: string = 'Button'
	@Input() leftIcon!: IconName | IconName[]
	@Input() rightIcon!: IconName | IconName[]
	@Input() buttonClass: string = ''
	@Input() disabled: boolean = false
	@Input() type: 'default' | 'disabled' | 'outline' = 'default'
}
