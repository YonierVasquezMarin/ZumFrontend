import { Component } from '@angular/core'
import { SlideChecker } from '@classes/slide-checker.interface'

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
