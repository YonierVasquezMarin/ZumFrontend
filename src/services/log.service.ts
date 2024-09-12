import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class LogService {
	constructor() {}

	logError(error: any) {
		console.error(error)
	}
}
