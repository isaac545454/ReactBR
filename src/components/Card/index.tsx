import { Center, Link } from '@chakra-ui/react'

export const Card = ({ title, link }: { link: string; title: string }) => {
	return (
		<Center borderRadius="8" mb="2" bg="#30363d" h="24">
			<Center as="span" flex="1" textAlign="left">
				<Link href={link} fontWeight="bold" fontSize="medium" textAlign="center" color="#e6edf3" target="_blank">
					{title}
				</Link>
			</Center>
		</Center>
	)
}
