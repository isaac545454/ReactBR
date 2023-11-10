import {
	Drawer as DrawerC,
	DrawerContent,
	DrawerOverlay,
	DrawerHeader,
	DrawerCloseButton,
	DrawerBody,
	Text,
	useMediaQuery,
} from '@chakra-ui/react'

type Props = {
	isOpen: boolean
	onClose: () => void
}

export const Drawer = ({ isOpen, onClose }: Props) => {
	const [isSmallScreen] = useMediaQuery('(max-width: 48em)')
	return (
		<DrawerC isOpen={isOpen} placement={isSmallScreen ? 'top' : 'left'} onClose={onClose}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>Create your account</DrawerHeader>
				<DrawerBody>
					<Text>aaaaa</Text>
				</DrawerBody>
			</DrawerContent>
		</DrawerC>
	)
}
