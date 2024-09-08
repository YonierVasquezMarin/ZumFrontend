import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NgxPaginationModule } from 'ngx-pagination'

@Component({
	selector: 'app-pagination',
	standalone: true,
	imports: [CommonModule, NgxPaginationModule],
	templateUrl: './pagination.component.html',
	styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
	@Input({ required: true }) totalPages!: number
	@Input({ required: true }) currentPage!: number
	@Output() pageChange = new EventEmitter<number>()

	maxPagesToShow = 5 // Maximum pages to show before the "..."
  endPageToShow = 0

	changePage(newPage: number) {
		if (newPage >= 1 && newPage <= this.totalPages) {
			this.pageChange.emit(newPage)
		}
	}

	previousPage() {
		this.changePage(this.currentPage - 1)
	}

	nextPage() {
		this.changePage(this.currentPage + 1)
	}

  get showLastPage() {
    return this.endPageToShow != this.totalPages
  }

	get showThreePointsAtEnd() {
		return this.currentPage + this.maxPagesToShow < this.totalPages
	}

	get showThreePointsAtStart() {
		return this.currentPage > this.maxPagesToShow
	}

	get pagesToShow() {
		const start = Math.max(1, this.currentPage - Math.floor(this.maxPagesToShow / 2))
		const end = Math.min(this.totalPages, start + this.maxPagesToShow - 1) 
    this.endPageToShow = end
		const pages = []
		for (let i = start; i <= end; i++) {
			pages.push(i)
		}
		return pages
	}
}
