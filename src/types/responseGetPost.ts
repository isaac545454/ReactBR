export interface Title {
	type: string
	text: string
	direction: string
}
export interface Data {
	data: { title: Title[]; link: Link[]; id: string }
}
export interface Link {
	type: string
	text: string
	direction: string
}

export type PrismicApiResponse = {
	page: number
	results_per_page: number
	results_size: number
	total_results_size: number
	total_pages: number
	next_page: null | number
	prev_page: null | number
	results: Data[]
	version: string
	license: string
}
