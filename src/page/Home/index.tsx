import { Card } from '../../components/Card'
import { Cube } from '../../components/Cube'
import { Accordion, Box, Flex } from '@chakra-ui/react'
import { useGetPostQuery } from '../../query/useGetPostQuery'

export const Home = () => {
	const { data, isLoading } = useGetPostQuery()
	const List = data?.results
	console.log(data?.results)

	if (isLoading || !data?.results) return <div />

	return (
		<Flex flexDirection="column">
			<Cube />
			<Box maxWidth="1200px" mx="auto" mt={{ base: '500px', lg: '700px' }}>
				<Accordion w="50vw" allowToggle>
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
