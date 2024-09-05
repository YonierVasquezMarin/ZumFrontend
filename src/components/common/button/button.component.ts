import { IconName } from '@fortawesome/fontawesome-common-types'
import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { IconComponent } from '@common-components/icon/icon.component'

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [CommonModule, IconComponent],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss',
})
export class ButtonComponent {
	@Input() text: string = 'Button'
	@Input() leftIcon: IconName | null = null
	@Input() rightIcon: IconName | null = null
	@Input() buttonClass: string = ''
	@Input() disabled: boolean = false
	@Input() type: 'default' | 'disabled' | 'outline' = 'default'
}
