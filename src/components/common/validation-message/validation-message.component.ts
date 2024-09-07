import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { AbstractControl } from '@angular/forms'

@Component({
	selector: 'app-validation-message',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './validation-message.component.html',
	styleUrl: './validation-message.component.scss',
})
export class ValidationMessageComponent {
	@Input({required: true}) control!: AbstractControl | null
	@Input() minLength!: number
	@Input() maxLength!: number

	private validationMessages: { [key: string]: (control: AbstractControl) => string } = {
		required: () => 'Este campo es requerido.',
		email: () => 'El formato del correo no es válido.',
		minlength: (control: AbstractControl) =>
			`Debe tener al menos ${control.errors?.['minlength'].requiredLength} caracteres.`,
		maxlength: (control: AbstractControl) =>
			`Debe tener como máximo ${control.errors?.['maxlength'].requiredLength} caracteres.`,
	}

	get errorMessage(): string | null {
		const FIRST_ELEMENT = 0
		if (this.control?.touched && this.control?.invalid) {
			const firstErrorKey = Object.keys(this.control.errors || {})[FIRST_ELEMENT]
			if (firstErrorKey && this.validationMessages[firstErrorKey]) {
				return this.validationMessages[firstErrorKey](this.control)
			}
		}
		return null
	}
}
