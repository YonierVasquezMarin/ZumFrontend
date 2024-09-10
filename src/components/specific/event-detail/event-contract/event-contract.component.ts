import { SlideChecker } from '@interfaces/slide-checker.interface'
import { Component } from '@angular/core'

@Component({
	selector: 'app-event-contract',
	standalone: true,
	imports: [],
	templateUrl: './event-contract.component.html',
	styleUrl: './event-contract.component.scss',
})
export class EventContractComponent implements SlideChecker {
	title = 'Contrato'

	checkSlide(): boolean {
		return true
	}
}
