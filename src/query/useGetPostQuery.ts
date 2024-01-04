import { useQuery } from '@tanstack/react-query'
import { createHttp } from '../infra/Http/HttpClientFactory/create-http-factory'
import { endpoint } from '../infra/Http/HttpEndpoints/endpoint-http'
import { HttpMethod } from '../enum/HttpMethod'
import { PrismicApiResponse } from '../types/responseGetPost'

export const useGetPostQuery = (promise_: Promise<PrismicApiResponse>) => {
	return useQuery<PrismicApiResponse>({
		queryKey: ['useGetPostQuery'],
		queryFn: () => promise_,
	})
}

const { http } = createHttp<PrismicApiResponse>()
http.exec({ method: HttpMethod.GET, endpoint: endpoint.getPosts })
