import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  StackProps,
  Text,
} from '@chakra-ui/react'
import { Logo, LogoPutih } from './Logo'
import { GoogleIcon } from './ProviderIcons'
import Home from '../home'
import LandingPage from '../landing_page/landingPage'
import {Link} from 'react-router-dom'

export const SignInForm = (props: StackProps) => (
  <Stack spacing="8" {...props}>
    <Stack spacing="6">
      <LogoPutih display={{ md: 'none' }} />
      <Stack spacing={{ base: '2', md: '3' }} textAlign="left">
        <Heading textColor={"white"} fontSize={"6xl"}>Sign In</Heading>
                <Text color="white">
          Don't have an account? <Link to="/pricing-area">Sign up</Link>
        </Text>
      </Stack>
    </Stack>
    <Stack spacing="6">
      <Stack spacing="5">
        <FormControl>
          <FormLabel textColor={"white"} htmlFor="email">Email</FormLabel>
          <Input id="email" placeholder="Enter your email" type="email" />
        </FormControl>
        <FormControl>
          <FormLabel textColor={"white"} htmlFor="password">Password</FormLabel>
          <Input id="password" placeholder="********" type="password" />
        </FormControl>
      </Stack>
      <HStack justify="space-between">
        <Checkbox style={{color: 'white'}} colorScheme="green" defaultChecked >Remember me </Checkbox>
        <Button as={Link} to="/forget-password" variant="text" size="sm" textColor={"white"}>
          Forget password
        </Button>
      </HStack>
      <Stack spacing="4">
        <Button style={{color: 'white'}} as={Link} to="/home" >Login</Button>
      </Stack>
    </Stack>
  </Stack>
)
