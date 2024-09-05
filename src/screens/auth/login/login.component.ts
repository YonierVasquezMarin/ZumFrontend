import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import {
	FormBuilder,
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms'
import { ButtonComponent } from '@common-components/button/button.component'
import { ICONS_CONTANTS } from '@common/constants/icon.contants'
import { UserLogin } from '@common/types/user-login'
import { UsersService } from '../../../services/users.service'
import { ResponseBase } from '@common/types/response-base'
import { HttpStatusCode } from '@angular/common/http'
import { StorageService } from '../../../services/storage.service'

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

	constructor(
		private usersService: UsersService,
		private storageService: StorageService,
		private formBuilder: FormBuilder,
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
		var credentials: UserLogin = { ...this.loginForm.value }
		this.usersService.login(credentials).subscribe({
			next: (response) => this.manageResponseLogin(response),
			error: (error) => this.manageErrorLogin(error),
		})
	}

	manageResponseLogin(response: ResponseBase<string>) {
		if (response && response.statusCode === HttpStatusCode.Ok) {
			this.storageService.saveToken(response.data)
			console.log('Login success')
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
}
