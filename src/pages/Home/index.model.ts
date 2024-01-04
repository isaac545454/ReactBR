import { useGetPostQuery } from '../../query/useGetPostQuery'
import { PrismicApiResponse } from '../../types/responseGetPost'

export const useHomeModel = (prismicApiResponsePromise: Promise<PrismicApiResponse>) => {
	const { data, isLoading } = useGetPostQuery(prismicApiResponsePromise)
	const List = data?.results

	return {
		List,
		isLoading,
	}
}
