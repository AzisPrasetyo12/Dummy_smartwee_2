import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Logo } from './Logo'
import { GoogleIcon } from './ProviderIcons'

export const setnewpassword = () => (
  <Container maxW="md" py={{ base: '12', md: '24' }}>
    <Stack spacing="8">
      <Stack spacing="20">
        <Logo />
        <Stack spacing={{ base: '1', md: '1' }} textAlign="left">
          <Heading size={{ base: 'small', md: 'small' }} fontSize={'2xl'}>Reset Your Password</Heading>
          <Text color="fg.muted">Type in your new password </Text>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
          <FormControl>
            <FormLabel htmlFor="email">New Password</FormLabel>
            <Input id="email" placeholder="Enter your password" type="email" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Retry new password</FormLabel>
            <Input id="email" placeholder="Enter your new password" type="email" />
          </FormControl>
        </Stack>
        <Stack spacing="4">
          <Link href="/set-new-password-done">
          <Button>Reset</Button>
          </Link>
        </Stack>
        <Link href="/home">
        <Stack spacing="4">
          <Button>Back To Login</Button>
        </Stack>
        </Link>
      </Stack>
    </Stack>
  </Container>
)
