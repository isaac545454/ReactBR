import { Card } from '../../components/Card'
import { Cube } from '../../components/Cube'
import { useHomeModel } from './index.model'
import { Box, Flex, Grid } from '@chakra-ui/react'

export const HomeView = ({ List, isLoading }: ReturnType<typeof useHomeModel>) => {
	return (
		<Flex flexDirection="column">
			<Cube />
			{isLoading || (!List && <div />)}
			<Box
				maxWidth="1200px"
				mx="auto"
				mt={{ base: '450px', md: '550px', lg: '650px' }}
				zIndex={100}
				pt="20"
				pb="32"
				px="4"
			>
				<Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4}>
					{List?.map(item => (
						<Card key={item.data.id} link={item.data.link[0].text} title={item.data.title[0].text} />
					))}
				</Grid>
			</Box>
		</Flex>
	)
}
