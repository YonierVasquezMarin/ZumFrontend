import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { ButtonComponent } from '@common-components/button/button.component'
import { ICONS_CONTANTS } from '@common/constants/icon.contants'

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
	icons = ICONS_CONTANTS
	loginForm!: FormGroup
	hidePassword = false

	constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

	onSubmit(): void {
    console.log(this.loginForm)
		if (this.loginForm.valid) {
			// Manejar el envío del formulario
			console.log(this.loginForm.value)
		}
	}

	showPassword(): void {
		this.hidePassword = !this.hidePassword
	}
}
