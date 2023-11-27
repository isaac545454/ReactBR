import { AxiosInstance } from 'axios'
import { HttpServiceProps } from './types'
import { HttpProps } from '../../../types/HttpProps'
import { FetchDataError } from '../Error'

export class HttpService<IResponse, TClient extends AxiosInstance> implements HttpServiceProps<IResponse> {
	constructor(private readonly client: TClient) {}

	async exec({ endpoint = '', ...res }: HttpProps): Promise<IResponse> {
		try {
			const { data } = await this.client<IResponse>(endpoint, { ...res })
			return data
		} catch {
			throw new FetchDataError('Falha ao buscar dados da API')
		}
	}
}
