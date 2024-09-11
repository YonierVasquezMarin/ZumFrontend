import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { UsersService } from '@services/users.service'

export const loggedGuard: CanActivateFn = (route, state) => {
	const usersService = inject(UsersService)
	const router = inject(Router)
	const isLogged = usersService.IsUserLogged()
	if (!isLogged) return router.createUrlTree(['login'])
	return isLogged
}

export const loggoutGuard: CanActivateFn = (route, state) => {
	const usersService = inject(UsersService)
	const router = inject(Router)
	const isLogged = usersService.IsUserLogged()
	if (isLogged) return router.createUrlTree(['dashboard'])
	return !isLogged
}
