import { ValidationMessageComponent } from '@common-components/validation-message/validation-message.component'
import { ButtonComponent } from '@common-components/button/button.component'
import { userLoggedDto, UserLoginDto } from '@dtos/users.dtos'
import { StorageService } from '@services/storage.service'
import { UsersService } from '@services/users.service'
import { HttpStatusCode } from '@angular/common/http'
import { ResponseBase } from '@type/response-base'
import { Component, OnInit } from '@angular/core'
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
import { LoaderDirective } from '../../../../directives/loader.directive'

@Component({
	selector: 'app-login-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ButtonComponent,
		ValidationMessageComponent,
		LoaderDirective,
	],
	templateUrl: './login-form.component.html',
	styleUrl: './login-form.component.scss',
})
export class LoginFormComponent implements OnInit {
	loginForm!: FormGroup
	hidePassword = false

	constructor(
		private usersService: UsersService,
		private formBuilder: FormBuilder,
		private storageService: StorageService,
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

	async login() {
		if (this.loginForm.invalid) {
			this.loginForm.markAllAsTouched()
			return
		}
		let credentials: UserLoginDto = { ...this.loginForm.value }
		var response = await this.usersService.login(credentials)
		this.manageResponseLogin(response)
		this.manageErrorLogin(response)
	}

	manageResponseLogin(response: ResponseBase<userLoggedDto>) {
		if (response && response.statusCode === HttpStatusCode.Ok) {
			this.storageService.saveToken(response.data.accessToken)
			this.storageService.saveUser(response.data.user)
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
