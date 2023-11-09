import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import {Home} from '../page/Home'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			 <Home />
		</QueryClientProvider>
	</React.StrictMode>,
)