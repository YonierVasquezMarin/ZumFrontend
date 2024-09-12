import { HttpClient } from '@angular/common/http'
import { LogService } from '@services/log.service'
import { Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class LocationService {
	api_root = 'https://countriesnow.space/api/v0.1/countries'

	constructor(private http: HttpClient, private log: LogService) {}

	async #getLocationData(url: string): Promise<any> {
		const locationData = await firstValueFrom(this.http.get<any>(url))
		if (locationData.error) {
			throw new Error(locationData.msg)
		}
		return locationData.data
	}

	async getCountries(): Promise<string[]> {
		try {
			const countriesData = await this.#getLocationData(`${this.api_root}/positions`)
			const countries = countriesData.map((country: any) => country.name)
			return countries as string[]
		} catch (error) {
			this.log.logError(error)
		}
		return []
	}

	async getDepartments(country: string): Promise<string[]> {
		try {
			const departmentsData = await this.#getLocationData(
				`${this.api_root}/states/q?country=${country}`,
			)
			const departments = departmentsData.states.map((state: any) => state.name)
			const updatedDepartments = departments.map((department: any) => {
				if (department.includes(' Department')) {
					return department.replace(' Department', '')
				}
				return department
			})
			return updatedDepartments as string[]
		} catch (error) {
			this.log.logError(error)
		}
		return []
	}

	async getCities(country: string, department: string): Promise<string[]> {
		if (country == 'Colombia' && !department.includes('Department')) {
			department = department.trim() + ' Department'
		}
		try {
			const citiesData = await this.#getLocationData(
				`${this.api_root}/state/cities/q?country=${country}&state=${department}`,
			)
			return citiesData as string[]
		} catch (error) {
			this.log.logError(error)
		}
		return []
	}
}
