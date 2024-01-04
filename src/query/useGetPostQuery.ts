import { useQuery } from '@tanstack/react-query'
import { PrismicApiResponse } from '../types/responseGetPost'

export const useGetPostQuery = (prismicApiResponsePromise: Promise<PrismicApiResponse>) => {
	return useQuery<PrismicApiResponse>({
		queryKey: ['useGetPostQuery'],
		queryFn: () => prismicApiResponsePromise,
	})
}
