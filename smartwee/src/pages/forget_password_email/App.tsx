import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Logo } from './Logo'
import { GoogleIcon } from './ProviderIcons'
import {Link} from 'react-router-dom'

export const forgetpasswordemail = () => (
  <Container maxW="md" py={{ base: '12', md: '24' }}>
    <Stack spacing="8">
      <Stack spacing="20">
        <Logo />
        <Stack spacing={{ base: '2', md: '3' }} textAlign="left">
          <Heading size={{ base: 'small', md: 'small' }} fontSize={"2xl"}>Recovery Email Sent!</Heading>
          <Text color="fg.muted">Please check your email for next step to reset your password</Text>
        </Stack>
      </Stack>
      <Stack spacing="6">

        <Stack spacing="8">
          <Button as={Link} to="/home">CONTACT SUPPORT</Button>
        </Stack>
        <Stack spacing="4">
          <Button as={Link} to="/login-test">BACK TO LOGIN </Button>
        </Stack>
      </Stack>
    </Stack>
  </Container>
)
