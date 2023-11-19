import { useQuery } from '@tanstack/react-query'
import { createHttp } from '@/infra/Http/HttpClientFactory/create-http-factory'

type Response = {}

export const {{name}} = () => {
  const { http } = createHttp<Response>()
	return useQuery<Response>({
		queryKey: ['useGetPostQuery'],
		queryFn: () => http.exec({  }),
	})
}

 