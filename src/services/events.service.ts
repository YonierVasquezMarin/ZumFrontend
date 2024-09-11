import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventResponseDto } from '@dtos/events.dtos';
import { PaginatedRequestDto, PaginatedResponseDto } from '@dtos/paginated.dtos';
import { environment } from '@environments/environment.development';
import { ResponseBase } from '@type/response-base';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  url = `${environment.apiUrl}/events`;
	constructor(private http: HttpClient) {}

  getAllPaginated(request: PaginatedRequestDto<{}>): Promise<ResponseBase<PaginatedResponseDto<EventResponseDto>>> {
    var response = this.http.post<ResponseBase<PaginatedResponseDto<EventResponseDto>>>(`${this.url}/get-events`, request);
    return firstValueFrom(response);
  }
 
}
