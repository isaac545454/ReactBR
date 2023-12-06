import { Center, Text } from '@chakra-ui/react'
import { PrismicImage } from '../../types/responseGetPost'

export const Card = ({ title }: { image: PrismicImage; description: string; title: string }) => {
	return (
		<Center borderRadius="8" mb="4" bg="#30363d">
			<Center h="20">
				<Center as="span" flex="1" textAlign="left">
					<Text fontWeight="bold" fontSize="medium" textAlign="center" color="#e6edf3">
						{title}
					</Text>
				</Center>
			</Center>
		</Center>
	)
}
