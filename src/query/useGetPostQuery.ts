import { useQuery } from '@tanstack/react-query'
import { createHttp } from '../infra/Http/HttpClientFactory/create-http-factory'
import { endpoint } from '../infra/Http/HttpEndpoints/endpoint-http'
import { HttpMethod } from '../enum/HttpMethod'
import { PrismicApiResponse } from '../types/responseGetPost'

export const useGetPostQuery = () => {
	const { http } = createHttp<PrismicApiResponse>()
	return useQuery<PrismicApiResponse>({
		queryKey: [useGetPostQuery],
		queryFn: () => http.exec({ method: HttpMethod.GET, endpoint: endpoint.getPosts }),
	})
}
