import {
	Box,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Image,
	Text,
	Textarea,
} from '@chakra-ui/react'
import { PrismicImage } from '../../types/responseGetPost'
import { motion, useScroll } from 'framer-motion'

export const Card = ({ image, description, title }: { image: PrismicImage; description: string; title: string }) => {
	const { scrollX } = useScroll()
	console.log(scrollX.destroy)
	return (
		<motion.div>
			<AccordionItem bg="#D3D3D3" borderRadius="8" mb="2">
				<AccordionButton h="20">
					<Box as="span" flex="1" textAlign="left">
						<Text fontWeight="bold" fontSize="medium" textAlign="center">
							{title}
						</Text>
					</Box>
					<AccordionIcon />
				</AccordionButton>
				<AccordionPanel border="none" pb="4" display="flex" flexDirection="column" alignItems="center">
					<Textarea
						defaultValue={description}
						resize="none"
						disabled
						variant=""
						borderColor="black"
						w={{ base: '100%', lg: '80%', xl: '60%' }}
						h={`${description.length * 0.6} `}
						style={{ opacity: 1 }}
					/>
					<Image src={image.url} alt={image?.alt} mx="auto" mt="10" w={{ base: '100%', lg: '80%', xl: '60%' }} />
				</AccordionPanel>
			</AccordionItem>
		</motion.div>
	)
}
