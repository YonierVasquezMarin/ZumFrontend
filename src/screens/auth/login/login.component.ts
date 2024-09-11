import { WelcomeMessagesComponent } from '@specific-components/login/welcome-messages/welcome-messages.component'
import { ButtonComponent } from '@common-components/button/button.component'
import { StorageService } from '@services/storage.service'
import { UsersService } from '@services/users.service'
import { HttpStatusCode } from '@angular/common/http'
import { ResponseBase } from '@type/response-base'
import { Component, OnInit } from '@angular/core'
import { UserLoginDto } from '@dtos/users.dtos'
import { CommonModule } from '@angular/common'
import {
	FormBuilder,
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms'
import { LoginFormComponent } from '@specific-components/login/login-form/login-form.component'

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ButtonComponent,
		WelcomeMessagesComponent,
		LoginFormComponent,
	],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
})
export class LoginComponent {}
