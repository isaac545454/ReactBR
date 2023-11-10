import { Box, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Image, Text } from '@chakra-ui/react'
import { PrismicImage } from '../../types/responseGetPost'

export const Card = ({ image, description, title }: { image: PrismicImage; description: string; title: string }) => {
	return (
		<AccordionItem bg="#D3D3D3" borderRadius="8" mb="2">
			<AccordionButton h="20">
				<Box as="span" flex="1" textAlign="left">
					<Text fontWeight="bold">{title}</Text>
				</Box>
				<AccordionIcon />
			</AccordionButton>
			<AccordionPanel pb={4} border="none">
				<Text p="2" fontSize="x-large">
					{description}
				</Text>
				<Image src={image.url} alt={image?.alt} />
			</AccordionPanel>
		</AccordionItem>
	)
}
