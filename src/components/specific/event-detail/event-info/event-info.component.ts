import { SlideChecker } from '@classes/slide-checker.interface'
import { Component } from '@angular/core'

@Component({
	selector: 'app-event-info',
	standalone: true,
	imports: [],
	templateUrl: './event-info.component.html',
	styleUrl: './event-info.component.scss',
})
export class EventInfoComponent implements SlideChecker {
	title = 'Información principal'

	checkSlide(): boolean {
		return true
	}
}
