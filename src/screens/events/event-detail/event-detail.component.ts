import { ValidationMessageComponent } from '@common-components/validation-message/validation-message.component'
import { ButtonComponent } from '@common-components/button/button.component'
import { CreateEventDto, EventResponseDto } from '@dtos/events.dtos'
import { LocationService } from '@services/location.service'
import { ContractService } from '@services/contract.service'
import { EventsService } from '@services/events.service'
import { BasicContractDto } from '@dtos/contract.dtos'
import { LogService } from '@services/log.service'
import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
	AbstractControl,
	FormBuilder,
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { LoaderDirective } from '../../../directives/loader.directive'

@Component({
	selector: 'app-event-detail',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, ButtonComponent, ValidationMessageComponent, LoaderDirective],
	templateUrl: './event-detail.component.html',
	styleUrl: './event-detail.component.scss',
})
export class EventDetailComponent implements OnInit {
	constructor(
		private log: LogService,
		private params: ActivatedRoute,
		private formBuilder: FormBuilder,
		private location: LocationService,
		private eventsService: EventsService,
		private contractService: ContractService,
	) {}

	eventForm!: FormGroup
	countries!: string[]
	departments!: string[]
	cities!: string[]
	contracts!: BasicContractDto[]
	isCreationMode = true

	ngOnInit(): void {
		this.buildForm()
		this.getCountries()
		this.setDefaultCountry()
		this.getContracts()
		this.loadEventIfIdWasPassed()
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

	async loadEventIfIdWasPassed() {
		const id = this.params.snapshot.paramMap.get('id')
		if (id) {
			this.isCreationMode = false
			const event = await this.eventsService.getEventById(id)
			event.startDate = this.removeHourFromFullDate(event.startDate)
			event.endDate = this.removeHourFromFullDate(event.endDate)
			this.eventForm.patchValue(event)
			this.getCities()
		}
	}

	async saveEvent() {
		try {
			if (this.eventForm.invalid) {
				this.eventForm.markAllAsTouched()
				return
			}
			this.setSecondsToStartAndEndTimes()
			const event: CreateEventDto = this.eventForm.value
			await this.eventsService.createEvent(event)
			alert('Evento creado correctamente')
		} catch (error) {
			this.log.logError(error)
			alert('Error al crear el evento. Por favor revisa que el presupuesto no exceda el del contrato.')
		}
	}

	setSecondsToStartAndEndTimes() {
		const startTime = this.getControl('startTime').value
		const startTimeParts = startTime.split(':')
		const startTimeWithSeconds = `${startTimeParts[0]}:${startTimeParts[1]}:00`
		this.getControl('startTime').setValue(startTimeWithSeconds)

		const endTime = this.getControl('endTime').value
		const endTimeParts = endTime.split(':')
		const endTimeWithSeconds = `${endTimeParts[0]}:${endTimeParts[1]}:00`
		this.getControl('endTime').setValue(endTimeWithSeconds)
	}

	removeHourToStartAndEndDate(event: EventResponseDto) {
		const startDateWithHour = this.getControl('startDate').value
		const startDateParts = startDateWithHour.split(':')
		const startDate = startDateParts[0]
		this.getControl('startDate').setValue(startDate)

		const endDateWithHour = this.getControl('endDate').value
		const endDateParts = endDateWithHour.split(':')
		const endDate = endDateParts[0]
		this.getControl('startDate').setValue(endDate)
	}

	removeHourFromFullDate(date: any) {
		const dateWithHour = date
		const dateParts = dateWithHour.split('T')
		const onlyDate = dateParts[0]
		return onlyDate
	}

	getControl(name: string) {
		return this.eventForm.get(name) as AbstractControl
	}
}
