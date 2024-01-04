import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Home } from '../pages/Home'
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ChakraProvider>
				<Header />
				<Home />
				<Footer />
			</ChakraProvider>
		</QueryClientProvider>
	</React.StrictMode>,
)
