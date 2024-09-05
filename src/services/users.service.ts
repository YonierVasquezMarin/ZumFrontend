import { environment } from '@environments/environment.development'
import { HttpClient } from '@angular/common/http'
import { UserLoginDTO } from '@dtos/users.dtos'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ResponseBase } from '@type/response-base'

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	url = `${environment.apiUrl}/users`
	constructor(private http: HttpClient) {}

	login(data: UserLoginDTO): Observable<ResponseBase<string>> {
		return this.http.post<ResponseBase<string>>(`${this.url}/login`, data)
	}
}
