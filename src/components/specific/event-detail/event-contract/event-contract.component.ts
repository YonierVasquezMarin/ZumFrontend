import { SlideSheet } from '@interfaces/slide-sheet.interface'
import { Component } from '@angular/core'

@Component({
	selector: 'app-event-contract',
	standalone: true,
	imports: [],
	templateUrl: './event-contract.component.html',
	styleUrl: './event-contract.component.scss',
})
export class EventContractComponent implements SlideSheet {
	title = 'Contrato'

	checkSlide(): boolean {
		return true
	}
}
