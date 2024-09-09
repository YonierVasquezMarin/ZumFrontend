import { environment } from '@environments/environment.development'
import { HttpClient } from '@angular/common/http'
import { UserLoginDTO } from '@dtos/users.dtos'
import { Injectable } from '@angular/core'
import { Observable, tap } from 'rxjs'
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

	login(data: UserLoginDTO): Observable<ResponseBase<string>> {
		var user = { name: 'Luis Angel', role: 'Super Admin' }
		return this.http.post<ResponseBase<string>>(`${this.url}/login`, data)
		// .pipe(
		// 	tap((response) => {
				
		// 		this.storageService.saveUser(user)
		// 		// this.storageService.saveToken(response.data)
		// 		// this.validToken().subscribe()
		// 	}),
		// )
	}

	validToken(): Observable<ResponseBase<string>> {
		return this.http.get<ResponseBase<string>>(`${this.url}/valid-token`)
	}

	logout() {
		this.storageService.removeToken()
		this.router.navigate(['/login'])
	}
}
