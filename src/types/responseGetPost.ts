type PrismicImageDimensions = {
	width: number
	height: number
}

export type PrismicImage = {
	dimensions: PrismicImageDimensions
	alt: string
	copyright: string | null
	url: string
}

type PrismicTitle = {
	type: 'heading1'
	text: string
	direction: 'ltr'
}

type PrismicDescription = {
	type: 'paragraph'
	text: string
	direction: 'ltr'
}

type PrismicPostData = {
	title: PrismicTitle[]
	image: PrismicImage
	description: PrismicDescription[]
}

type PrismicPost = {
	id: string
	uid: string
	url: string | null
	type: string
	href: string
	tags: string[]
	first_publication_date: string
	last_publication_date: string
	slugs: string[]
	data: PrismicPostData
}

export type PrismicApiResponse = {
	page: number
	results_per_page: number
	results_size: number
	total_results_size: number
	total_pages: number
	next_page: null | number
	prev_page: null | number
	results: PrismicPost[]
	version: string
	license: string
}
