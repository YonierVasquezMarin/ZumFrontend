import { Injectable, signal } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class LoaderService {
	isLoading = signal(false)
	countRequests = 0

	constructor() {}

	addRequest() {
		this.countRequests++
		if (this.isOnlyRequest()) this.isLoading.set(true)
	}

	removeRequest() {
		this.countRequests--
		if (this.isAllRequestsFinished()) this.isLoading.set(false)
	}

	isOnlyRequest() {
		return this.countRequests === 1
	}

	isAllRequestsFinished() {
		return this.countRequests === 0
	}
}
