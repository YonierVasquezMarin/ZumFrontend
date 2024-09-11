import { SlideSheet } from '@interfaces/slide-sheet.interface'
import { Component } from '@angular/core'

@Component({
	selector: 'app-event-info',
	standalone: true,
	imports: [],
	templateUrl: './event-info.component.html',
	styleUrl: './event-info.component.scss',
})
export class EventInfoComponent implements SlideSheet {
	title = 'Información principal'

	checkSlide(): boolean {
		return true
	}
}
