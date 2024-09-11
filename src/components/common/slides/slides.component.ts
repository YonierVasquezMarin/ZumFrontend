import { NgIf } from '@angular/common'
import { Component, Input, ViewChild, ViewContainerRef, OnInit, Type } from '@angular/core'
import { SlideSheet } from '@interfaces/slide-sheet.interface'

@Component({
	standalone: true,
	selector: 'app-slides',
	imports: [NgIf],
	templateUrl: './slides.component.html',
	styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
	@Input({ required: true }) slides: Type<SlideSheet>[] = []
	@Input({ required: true }) creationMode: boolean = false
	@ViewChild('slideContainer', { read: ViewContainerRef, static: true })
	slideContainer!: ViewContainerRef

	currentSlideIndex: number = 0
	currentSlideInstance: SlideSheet | null = null

	ngOnInit() {
		if (this.slides.length > 0) {
			this.loadSlide(this.currentSlideIndex)
		}
	}

	loadSlide(index: number) {
		this.slideContainer.clear()
		const componentRef = this.slideContainer.createComponent(this.slides[index])
		this.currentSlideInstance = componentRef.instance
	}

	nextSlide() {
		if (this.currentSlideInstance?.checkSlide()) {
			if (this.currentSlideIndex < this.slides.length - 1) {
				this.currentSlideIndex++
				this.loadSlide(this.currentSlideIndex)
			}
		} else {
			console.error('La validación del slide actual falló')
		}
	}

	prevSlide() {
		if (this.currentSlideIndex > 0) {
			this.currentSlideIndex--
			this.loadSlide(this.currentSlideIndex)
		}
	}

	get currentTitle(): string {
		return this.currentSlideInstance?.title ?? ''
	}
}
