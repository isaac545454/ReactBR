import { useQuery } from '@tanstack/react-query'
import { createHttp } from '@/infra/Http/HttpClientFactory/create-http-factory'

type Response = {}

export const useTestQuey = () => {
	const { http } = createHttp<Response>()
	return useQuery<Response>({
		queryKey: ['useTestQuey'],
		queryFn: () => http.exec({ endpoint: '/' }),
	})
}
