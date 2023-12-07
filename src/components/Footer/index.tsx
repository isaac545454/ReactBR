import { Flex, Link } from '@chakra-ui/react'
import { BsLinkedin, BsGithub, BsDiscord } from 'react-icons/bs'

export const Footer = () => {
	const size = 35
	return (
		<Flex
			bg="black"
			w="100vw"
			bottom="0"
			h="72px"
			position="fixed"
			justifyContent="center"
			alignItems="center"
			gap="14"
			zIndex={100}
		>
			<Link href="https://github.com/isaac545454" target="_blank" rel="noopener noreferrer">
				<BsGithub color="#fff" size={size} />
			</Link>
			<Link href="https://www.linkedin.com/in/isaac-gomes-matos/" target="_blank" rel="noopener noreferrer">
				<BsLinkedin color="#0077B5" size={size} />
			</Link>
			<Link href="https://discord.gg/ZJNzcMbX" target="_blank" rel="noopener noreferrer">
				<BsDiscord size={size} color="#7289DA" />
			</Link>
		</Flex>
	)
}
