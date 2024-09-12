import { ValidationMessageComponent } from '@common-components/validation-message/validation-message.component'
import { CreateEventDto } from '@dtos/events.dtos'
import { Component, OnInit } from '@angular/core'
import {
	AbstractControl,
	FormBuilder,
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms'
import { CommonModule } from '@angular/common'
import { ButtonComponent } from '@common-components/button/button.component'
import { LocationService } from '@services/location.service'
import { ContractService } from '@services/contract.service'
import { BasicContractDto } from '@dtos/contract.dtos'

@Component({
	selector: 'app-event-detail',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, ButtonComponent, ValidationMessageComponent],
	templateUrl: './event-detail.component.html',
	styleUrl: './event-detail.component.scss',
})
export class EventDetailComponent implements OnInit {
	constructor(
		private formBuilder: FormBuilder,
		private location: LocationService,
		private contractService: ContractService,
	) {}

	eventForm!: FormGroup
	countries!: string[]
	departments!: string[]
	cities!: string[]
	contracts!: BasicContractDto[]

	ngOnInit(): void {
		this.buildForm()
		this.getCountries()
		this.setDefaultCountry()
		this.getContracts()
	}

	buildForm() {
		this.eventForm = this.formBuilder.group({
			eventName: new FormControl('', [Validators.required]),
			description: new FormControl('', [Validators.required]),
			objective: new FormControl('', [Validators.required]),
			startDate: new FormControl('', [Validators.required]),
			startTime: new FormControl('', [Validators.required]),
			endDate: new FormControl('', [Validators.required]),
			endTime: new FormControl('', [Validators.required]),
			country: new FormControl('', [Validators.required]),
			department: new FormControl('', [Validators.required]),
			city: new FormControl('', [Validators.required]),
			assignedBudget: new FormControl('', [Validators.required]),
			contractId: new FormControl('', [Validators.required]),
		})
	}

	async getCountries() {
		this.countries = await this.location.getCountries()
	}

	setDefaultCountry() {
		this.getControl('country').setValue('Colombia')
		this.getDepartments()
	}

	async getDepartments() {
		const country = this.getControl('country').value
		this.departments = await this.location.getDepartments(country)
	}

	async getCities() {
		const country = this.getControl('country').value
		const department = this.getControl('department').value
		this.cities = await this.location.getCities(country, department)
	}

	async getContracts() {
		this.contracts = await this.contractService.getContracts()
	}

	saveEvent() {
		if (this.eventForm.invalid) {
			this.eventForm.markAllAsTouched()
			return
		}
		// let event: CreateEventDto = { ...this.eventForm.value }
		// this.eventsService.createEvent(event).subscribe({
		// 	next: (response) => this.manageResponseCreateEvent(response),
		// 	error: (error) => this.manageErrorCreateEvent(error),
		// })
	}

	getControl(name: string) {
		return this.eventForm.get(name) as AbstractControl
	}
}
