import { PaginatedRequestDto, PaginatedResponseDto } from '@dtos/paginated.dtos'
import { environment } from '@environments/environment.development'
import { EventResponseDto, CreateEventDto } from '@dtos/events.dtos'
import { ResponseBase } from '@type/response-base'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class EventsService {
	url = `${environment.apiUrl}/events`
	constructor(private http: HttpClient) {}

	getAllPaginated(
		request: PaginatedRequestDto<{}>,
	): Promise<ResponseBase<PaginatedResponseDto<EventResponseDto>>> {
		let response = this.http.post<ResponseBase<PaginatedResponseDto<EventResponseDto>>>(
			`${this.url}/get-events`,
			request,
		)
		return firstValueFrom(response)
	}

	async createEvent(event: CreateEventDto): Promise<ResponseBase<EventResponseDto>> {
		let response = this.http.post<ResponseBase<EventResponseDto>>(`${this.url}/create-event`, event)
		return firstValueFrom(response)
	}

	async getEventById(id: string): Promise<EventResponseDto> {
		const request = this.http.get<ResponseBase<EventResponseDto>>(`${this.url}/get-event/${id}`)
		const serverResponse = await firstValueFrom(request)
		const event = serverResponse.data
		return event
	}
}
