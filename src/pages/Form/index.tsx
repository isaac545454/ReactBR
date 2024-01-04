import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const userSchema = z.object({
	username: z.string().min(3),
	email: z.string().email(),
	age: z.number().int().positive(),
})

type User = z.infer<typeof userSchema>

export const Form = () => {
	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<User>({
		resolver: zodResolver(userSchema),
	})

	const onSubmit = (data: User) => {
		console.log(data)
	}
	console.log(!!errors.username)
	return (
		<Flex flexDirection="column" pt="32">
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl isInvalid={!!errors.username}>
					<FormLabel>First name</FormLabel>
					<Input placeholder="name" {...register('username')} border="1px" borderColor="red" />
					{errors.username && <FormErrorMessage>{errors.username.message}</FormErrorMessage>}
				</FormControl>
				<Button type="submit">enviar</Button>
			</form>
		</Flex>
	)
}
