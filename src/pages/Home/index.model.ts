import { useGetPostQuery } from '../../query/useGetPostQuery'
import { PrismicApiResponse } from '../../types/responseGetPost'

export const useHomeModel = (prismicApiResponsePromise: Promise<PrismicApiResponse>) => {
	const { data, isLoading } = useGetPostQuery(prismicApiResponsePromise)

	return {
		data,
		isLoading,
	}
}
