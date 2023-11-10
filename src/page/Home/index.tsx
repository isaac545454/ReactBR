import { Cube } from '../../components/Cube'
import { Box, Flex } from '@chakra-ui/react'

export const Home = () => {
	return (
		<Flex flexDirection="column">
			<Cube />
			<Box maxWidth="1200px" mx="auto" mt={{ base: '500px', lg: '700px' }}></Box>
		</Flex>
	)
}
