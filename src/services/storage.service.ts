import { Injectable } from '@angular/core'
import { timeout } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class StorageService {
	saveToken(token: string) {
		sessionStorage.setItem('token', token)
	}

	getToken() {
		return sessionStorage.getItem('token')
	}

	removeToken() {
		sessionStorage.removeItem('token')
	}

	saveUser(user: any) {
		const userString = JSON.stringify(user)
		this.saveItem('user', userString)
	}

	getUser() {
		const userString = JSON.parse(sessionStorage.getItem('user')!)
		return userString
	}

	saveItem(key: string, value: any) {
		var stringValue = JSON.stringify(value)
		sessionStorage.setItem(key, stringValue)
    timeout(1000)
	}

	getItem(key: string) {
		return JSON.parse(sessionStorage.getItem(key)!)
	}

	removeItem(key: string) {
		sessionStorage.removeItem(key)
	}

	clear() {
		sessionStorage.clear()
	}
}
