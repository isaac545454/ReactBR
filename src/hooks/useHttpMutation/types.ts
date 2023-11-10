import { MutationOptions } from '@tanstack/react-query'
import { HttpProps } from '../../types/HttpProps'

export interface IPostMutation<TData, TError, TRequest> {
	options?: MutationOptions<TData, TError, TRequest>
	HttpService: HttpProps
}

export type TRequestProps<T> = T & {
	params?: object
}
