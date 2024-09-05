import { Injectable } from '@angular/core'
import { environment } from '../environments/environment.development'
import { HttpClient } from '@angular/common/http'
import { UserLoginDto } from '@common/types/user-login'
import { ResponseBase } from '@common/types/response-base'
import { Observable } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	url = `${environment.apiUrl}/users`
	constructor(private http: HttpClient) {}

	login(data: UserLoginDto): Observable<ResponseBase<string>> {
		return this.http.post<ResponseBase<string>>(`${this.url}/login`, data)
	}
}
