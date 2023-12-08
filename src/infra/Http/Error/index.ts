import { isAxiosError } from 'axios'

export const RequestError = {
	UnauthorizedError: 401,
	InternalServerError: 500,
	NotFoundError: 404,
} as const

export class FetchDataError {
	static analyzeError(error: unknown) {
		if (!isAxiosError(error)) return console.log('Not AxiosError')
		const status = error.response?.status
		if (!status) return console.log('Not status')
		if (status === RequestError.UnauthorizedError) return console.log('UnauthorizedError')
		if (status === RequestError.InternalServerError) return console.log('InternalServerError')
		if (status === RequestError.NotFoundError) return console.log('NotFoundError')
	}
}
