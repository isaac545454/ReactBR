import { HttpProps } from '../../../types/HttpProps'

export type HttpServiceProps<IResponse> = {
	exec: (params: HttpProps) => Promise<IResponse>
}
