import { environment } from '@environments/environment.development'
import { BasicContractDto } from '@dtos/contract.dtos'
import { ResponseBase } from '@type/response-base'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs'

@Injectable({
	providedIn: 'root',
})
export class ContractService {
	url = `${environment.apiUrl}/Contracts`

	constructor(private http: HttpClient) {}

	async getContracts() {
		const serverRequest = this.http.get<ResponseBase<BasicContractDto[]>>(this.url + '/get-contracts')
		const serverResponse = await firstValueFrom(serverRequest)
		const contracts = serverResponse.data
		return contracts
	}
}
