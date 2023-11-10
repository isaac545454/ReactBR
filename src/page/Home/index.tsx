import { Cube } from '../../components/Cube'
import { Box, Flex } from '@chakra-ui/react'
import { FixedSizeList } from 'react-window'

const data = Array.from({ length: 1000 }, (_, index) => `Item ${index}`)

const Row = ({ index, style }: { index: number; style: object }) => <div style={style}>Row {data[index]}</div>
export const Home = () => {
	return (
		<Flex flexDirection="column">
			<Cube />
			<Box maxWidth="1200px" mx="auto" mt={{ base: '500px', lg: '700px' }}>
				<FixedSizeList height={500} width={500} itemCount={data.length} itemSize={50}>
					{Row}
				</FixedSizeList>
			</Box>
		</Flex>
	)
}
