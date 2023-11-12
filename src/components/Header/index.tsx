import { useState } from 'react'
import { Icon, Box, Flex, Image, Text } from '@chakra-ui/react'
import { HiMenu } from 'react-icons/hi'
import { Drawer } from '../Drawer'

export function Header() {
	const [drawerOpen, setDrawerOpen] = useState(false)
	const handleOpen = () => setDrawerOpen(state => !state)

	return (
		<Box bg="black" py="2" px="4" position="fixed" w="100vw" zIndex="100">
			<Flex maxWidth="1200px" mx="auto" justifyContent="space-between" alignItems="center">
				<Flex alignItems="center">
					<Image src="reacttemplate-svgrepo-com.svg" w="14" />
					<Text textColor="white" fontWeight="bold" fontSize="x-large" ml="2">
						ReactBR
					</Text>
				</Flex>
				<Icon zIndex={100} as={HiMenu} color="white" fontSize="32" cursor="pointer" onClick={handleOpen} />
			</Flex>
			<Drawer isOpen={drawerOpen} onClose={handleOpen} />
		</Box>
	)
}
