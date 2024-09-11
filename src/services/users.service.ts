import { environment } from '@environments/environment.development'
import { HttpClient } from '@angular/common/http'
import { UserDto, userLoggedDto, UserLoginDto } from '@dtos/users.dtos'
import { Injectable } from '@angular/core'
import { firstValueFrom, Observable, tap } from 'rxjs'
import { ResponseBase } from '@type/response-base'
import { StorageService } from './storage.service'
import { Router } from '@angular/router'

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	url = `${environment.apiUrl}/users`
	constructor(
		private http: HttpClient,
		private storageService: StorageService,
		private router: Router,
	) {}

	login(data: UserLoginDto): Promise<ResponseBase<userLoggedDto>> {
		var response = this.http.post<ResponseBase<userLoggedDto>>(`${this.url}/login`, data)
		return firstValueFrom(response);
	}


	getUserLogged(): UserDto{
		const userString = this.storageService.getUser()
		const user: UserDto = JSON.parse(userString)
		return user
	}

	IsUserLogged(): boolean {
		const token = this.storageService.getToken()
		return !!token
	}

	logout() {
		this.storageService.removeToken()
		this.router.navigate(['/login'])
	}
}
