import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class StorageService {
	saveToken(token: string) {
		const timeout = 1000
		setInterval(() => {
		sessionStorage.setItem('token', token)
    }, timeout)
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

	saveItem(key: string, value: any,) {
		var stringValue = JSON.stringify(value)
		const timeout = 3000
		setInterval(() => {
			sessionStorage.setItem(key, stringValue)
		}, timeout)
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
