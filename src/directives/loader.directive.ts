import { Directive, effect, ElementRef, Input, Renderer2 } from '@angular/core'
import { ButtonComponent } from '@common-components/button/button.component'
import { LoaderService } from '@services/loader.service'

@Directive({
	selector: '[appLoader]',
	standalone: true,
})
export class LoaderDirective {
	private currentText: string = ''

	constructor(
		private loaderService: LoaderService,
		private renderer: Renderer2,
		private elementRef: ElementRef,
	) {
		effect(() => {
			if (this.loaderService.isLoading()) {
				this.disableElement()
			} else {
				this.enableElement()
			}
		})
	}

	ngAfterViewInit() {
		const span = this.elementRef.nativeElement.querySelector('span')
		this.currentText = span.innerText
	}

	disableElement() {
    const button = this.elementRef.nativeElement.querySelector('button')
    this.renderer.addClass(button, 'disabled')  
		button.disabled = true
		const spanText = this.elementRef.nativeElement.querySelector('span')

		const loadingIcon = this.renderer.createElement('i')
		this.renderer.addClass(loadingIcon, 'fa-solid')
		this.renderer.addClass(loadingIcon, 'fa-circle-notch')
		this.renderer.addClass(loadingIcon, 'fa-spin-pulse')
    this.renderer.addClass(loadingIcon,'loader-animation')

		if (spanText) {
			spanText.innerText = ''
		}
		this.renderer.appendChild(spanText, loadingIcon)
	}

	enableElement() {
    const button = this.elementRef.nativeElement.querySelector('button')
    this.renderer.removeClass(button, 'disabled')  
		button.disabled = false
		const spanText = this.elementRef.nativeElement.querySelector('span')
		const loadingIcon = spanText.querySelector('.fa-circle-notch')

		if (loadingIcon) {
			this.renderer.removeChild(button, loadingIcon)
		}
		if (spanText) {
			spanText.innerText = this.currentText
		}
	}
}
