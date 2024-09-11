export interface UserLoginDto {
	email: string
	password: string
}

export interface userLoggedDto {
	accessToken: string
	user: UserDto
}

export interface UserDto {
	userId: string
	name: string
	rolId: string
	roleName: string
	firstLetterInName: string
}
