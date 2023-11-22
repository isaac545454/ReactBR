import { HttpMethod } from '@/enum/HttpMethod'
import { createHttp } from '@/infra/Http/HttpClientFactory/create-http-factory'
import { useMutation } from '@tanstack/react-query'

type Response = {}

export const {{name}} = () => { 
	const { http } = createHttp<Response>()
	return useMutation<Response>({
		mutationFn: () =>
			http.exec({
				method: HttpMethod.POST,
				endpoint: '/',
			}),
	})
}
