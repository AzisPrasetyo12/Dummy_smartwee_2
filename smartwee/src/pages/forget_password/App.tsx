import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  // Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { Logo } from './Logo'
import { GoogleIcon } from './ProviderIcons'

export const forgetpassword = () => (
  <Container maxW="400px" py={{ base: '12', md: '24' }}>
    <Stack spacing="8">
      <Stack spacing="20">
        <Logo />
        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
          <Heading size={{md:"5px"}}>Reset Your Password</Heading>
          <Text textColor="Black">Type in your registered email address to reset password</Text>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" placeholder="Enter your email" type="email" />
          </FormControl>
        </Stack>
        <Stack spacing="4">
          <Button as={Link} to="/forget-password-email">Next</Button>
        </Stack>
        <Stack spacing="4">
          <Button as={Link} to="/home">Back To Login</Button>
        </Stack>
      </Stack>
    </Stack>
  </Container>
)
