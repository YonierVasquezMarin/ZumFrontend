import { ButtonComponent } from '@common-components/button/button.component'
import { StorageService } from '@services/storage.service'
import { UsersService } from '@services/users.service'
import { HttpStatusCode } from '@angular/common/http'
import { ResponseBase } from '@type/response-base'
import { Component, OnInit } from '@angular/core'
import { UserLoginDTO } from '@dtos/users.dtos'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'
import {
	AbstractControl,
	FormBuilder,
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms'
import { ValidationMessageComponent } from '@common-components/validation-message/validation-message.component'

@Component({
	selector: 'app-login-form',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, ButtonComponent, ValidationMessageComponent],
	templateUrl: './login-form.component.html',
	styleUrl: './login-form.component.scss',
})
export class LoginFormComponent implements OnInit {
	loginForm!: FormGroup
	hidePassword = false

	constructor(
		private usersService: UsersService,
		private storageService: StorageService,
		private formBuilder: FormBuilder,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.buildForm()
	}

	buildForm() {
		this.loginForm = this.formBuilder.group({
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [Validators.required]),
		})
	}

	login() {
		if (this.loginForm.invalid) {
			this.loginForm.markAllAsTouched()
			return
		}
		let credentials: UserLoginDTO = { ...this.loginForm.value }
		this.usersService.login(credentials).subscribe({
			next: (response) => this.manageResponseLogin(response),
			error: (error) => this.manageErrorLogin(error),
		})
	}

	manageResponseLogin(response: ResponseBase<string>) {
	
		if (response && response.statusCode === HttpStatusCode.Ok) {
			this.storageService.saveToken(response.data)

			this.navegateToDashboard()
		}
	}

	manageErrorLogin(error: any) {
		if (error && error.status === HttpStatusCode.Unauthorized) {
			console.log('Invalid credentials')
			return
		}
		console.log('An error occurred')
	}

	showPassword(): void {
		this.hidePassword = !this.hidePassword
	}

	getControl(name: string) {
		return this.loginForm.get(name) as AbstractControl
	}

	navegateToDashboard() {
		this.router.navigate(['/dashboard'])
	}
}
