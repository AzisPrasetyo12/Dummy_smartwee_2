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

export const forgetpassword = () => (
  <Container maxW="md" py={{ base: '12', md: '24' }}>
    <Stack spacing="8">
      <Stack spacing="10">
        <Logo />
        <Stack spacing={{ base: '2', md: '2' }} textAlign="left">
          <Heading size={{ base: 'small', md: 'medium' }} fontSize={'2xl'}>Recovery Email Sent</Heading>
          <Text color="fg.muted">Please check yout email for next step to reset your password </Text>
        </Stack>
      </Stack>
        <Stack spacing="6">
        </Stack>
        <Stack spacing="2">
          <Link href="/home">
          <Button>CONTACT SUPPORT</Button>
          </Link>
        </Stack>
        <Link href="/home">
        <Stack spacing="4">
          <Button>Back To Login</Button>
        </Stack>
        </Link>
      </Stack>
  </Container>
)
