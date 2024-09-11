import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'

import { appRoutes } from '@routes/app.routes'
import { tokenInterceptor } from '../interceptors/token.interceptor'

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(appRoutes),
		provideHttpClient(withFetch(), withInterceptors([tokenInterceptor])),
	],
}
