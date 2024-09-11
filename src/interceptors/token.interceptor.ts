import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { StorageService } from '@services/storage.service'

export const tokenInterceptor: HttpInterceptorFn = (request, next) => {
	const storageService = inject(StorageService)
	const token = storageService.getToken()
  console.log(token)
	if (!token) return next(request)

	request = request.clone({
		setHeaders: {
      Authorization: `Bearer ${token}`,
		},
	})
  
	return next(request)
}
