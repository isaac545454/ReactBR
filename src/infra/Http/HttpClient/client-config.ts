import axios from 'axios'

export const apiClient = axios.create({
	baseURL: `https://blog-tech-isaac.prismic.io/api/v2/documents/search?ref=${import.meta.env.KEY}`,
})
