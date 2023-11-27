export class FetchDataError extends Error {
	constructor(mensagem: string) {
		super(mensagem)
		this.name = 'FetchDataError'
	}
}
