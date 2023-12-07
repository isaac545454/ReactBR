import {
	Drawer as DrawerC,
	DrawerContent,
	DrawerOverlay,
	DrawerCloseButton,
	DrawerBody,
	Text,
	useMediaQuery,
} from '@chakra-ui/react'
import { options } from './options'

type Props = {
	isOpen: boolean
	onClose: () => void
}

export const Drawer = ({ isOpen, onClose }: Props) => {
	const [isSmallScreen] = useMediaQuery('(max-width: 48em)')
	return (
		<DrawerC isOpen={isOpen} placement={isSmallScreen ? 'top' : 'left'} onClose={onClose}>
			<DrawerOverlay />
			<DrawerContent bg="#0d1117" color="#e6edf3">
				<DrawerBody my="10">
					{options.map(item => (
						<Text fontWeight="bold" key={item.link}>
							{item.title}
						</Text>
					))}
				</DrawerBody>
				<DrawerCloseButton />
			</DrawerContent>
		</DrawerC>
	)
}
