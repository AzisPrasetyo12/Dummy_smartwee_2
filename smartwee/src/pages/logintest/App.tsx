import {
  Avatar,
  AvatarGroup,
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Logo, Background } from './Logo'
import { SignInForm } from './SignInForm'

export const logintest = () => (
  <Flex
    className="position-relative"
    margin={-16}
    minH={{ base: 'auto', md: '100vh' }}
    // bgGradient={{
    //   md: 'linear(to-r, 50%, bg.surface 50%)',
    // }}
  >
    <Background />

    <Flex maxW="8xl" mx="auto" width="full" zIndex={1} className="position-relative">
      <Box flex="1" display={{ base: 'none', md: 'block' }}>
        <Flex
          direction="column"
          px={{ base: '4', md: '8' }}
          height="full"
          color="white"
        >
          <Flex align="center" h="24">
            <Logo />
          </Flex>
          <Flex flex="1" align="center">
            <Stack spacing="8">
              <Stack spacing="6">
                <Heading fontStyle="" fontSize={"100px"} color="white">Hi There,</Heading>
                <Text textStyle="lg" maxW="xl" fontSize={'3xl'} color="white">
                  Welcome to SmartWee!
                </Text>
              </Stack>
              <HStack spacing="4">
                <Text fontWeight="medium"></Text>
              </HStack>
            </Stack>
          </Flex>
          <Flex align="center" h="24">
            <Text color="#31544E" textStyle="sm">
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Center flex="1">
        <SignInForm
          px={{ base: '4', md: '8' }}
          py={{ base: '12', md: '48' }}
          width="full"
          maxW="md"
        />
      </Center>
      </Flex>
    </Flex>
)
