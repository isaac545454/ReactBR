import { AxiosInstance } from 'axios'
import { HttpServiceProps } from './types'
import { HttpProps } from '../../../types/HttpProps'

export class HttpService<IResponse, TClient extends AxiosInstance> implements HttpServiceProps<IResponse> {
	constructor(private readonly client: TClient) {}
	/**
	 * Executa uma solicitação HTTP.
	 * @param {HttpProps} params - Os parâmetros da solicitação HTTP.
	 * @returns {Promise<IResponse>} Uma Promise que resolve na resposta da solicitação.
	 */
	async exec({ endpoint = '', ...res }: HttpProps): Promise<IResponse> {
		const { data } = await this.client<IResponse>(endpoint, { ...res })
		return data
	}
}
