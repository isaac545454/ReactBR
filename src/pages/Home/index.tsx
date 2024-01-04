import { useHomeModel } from './index.model'
import { HomeView } from './index.view'
import { PrismicApiResponse } from '@/types/responseGetPost'
import { HttpMethod } from '../../enum/HttpMethod'
import { createHttp } from '../../infra/Http/HttpClientFactory/create-http-factory'
import { endpoint } from '../../infra/Http/HttpEndpoints/endpoint-http'

export const Home = () => {
	const { http } = createHttp<PrismicApiResponse>()
	const { List, isLoading } = useHomeModel(http.exec({ method: HttpMethod.GET, endpoint: endpoint.getPosts }))

	return <HomeView isLoading={isLoading} List={List} />
}
