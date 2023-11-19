import { useQuery } from '@tanstack/react-query'

type Response = {}

export const {{name}} = () => {
  const { http } = createHttp<Response>()
	return useQuery<Response>({
		queryKey: ['useGetPostQuery'],
		queryFn: () => http.exec({  }),
	})
}

 