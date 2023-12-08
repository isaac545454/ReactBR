import { AxiosInstance } from 'axios'
import { HttpServiceProps } from './types'
import { HttpProps } from '../../../types/HttpProps'
import { FetchDataError } from '../Error'

export class HttpService<IResponse, TClient extends AxiosInstance> implements HttpServiceProps<IResponse> {
	constructor(private readonly client: TClient) {}

	async exec({ endpoint = '', ...res }: HttpProps): Promise<IResponse> {
		try {
			return (await this.client<IResponse>(endpoint, { ...res })).data
		} catch (err) {
			throw FetchDataError.analyzeError(err)
		}
	}
}
