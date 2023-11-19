import { Card } from '../../components/Card'
import { Cube } from '../../components/Cube'
import { Accordion, Box, Flex } from '@chakra-ui/react'
import { useGetPostQuery } from '../../query/useGetPostQuery'

export const Home = () => {
	const { data, isLoading } = useGetPostQuery()
	const List = data?.results

	return (
		<Flex flexDirection="column">
			<Cube />
			{isLoading || (!List && <div />)}
			<Box maxWidth="1200px" mx="auto" mt={{ base: '450px', lg: '550px' }} zIndex={100}>
				<Accordion w={{ base: '90vw', lg: '70vw', xl: '50vw' }} mb="20" allowToggle>
					{List?.map(item => (
						<Card
							key={item.uid}
							image={item.data.image}
							description={item.data.description[0].text}
							title={item.data.title[0].text}
						/>
					))}
				</Accordion>
			</Box>
		</Flex>
	)
}
