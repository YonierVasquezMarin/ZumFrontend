import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss',
})
export class ButtonComponent {
	@Input() text: string = 'Button'
	@Input() leftIcon: string | null = null
	@Input() rightIcon: string | null = null
	@Input() buttonClass: string = ''
	@Input() disabled: boolean = false
	@Input() type: 'default' | 'disabled' | 'outline' = 'default'
}
