import { useQuery, UseQueryResult, QueryKey } from '@tanstack/react-query'
import { IGetMutation } from './types'
import { createHttp } from '../../infra/Http/HttpClientFactory/create-http-factory'
import { HttpMethod } from '../../enum/HttpMethod'

export const useHttpQuery = <TData, TError = unknown>({
	queryKey,
	options,
	HttpService,
}: IGetMutation<TData, TError>): UseQueryResult<TData, TError> => {
	const { http } = createHttp<TData>()
	return useQuery<TData, TError, TData, QueryKey>(
		queryKey,
		() => http.exec({ ...HttpService, method: HttpMethod.GET }),
		options,
	)
}
