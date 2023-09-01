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
import { Logo, Logoceklist} from './Logo'
import { GoogleIcon } from './ProviderIcons'
import { Link } from 'react-router-dom';

export const setnewpassworddone = () => (
  <Container maxW="370px" py={{ base: '50', md: '10' }}>
    <Stack spacing="10">
      <Stack spacing="20">
        <Logo />
        <Logoceklist/>
        <Stack spacing={{ base: '10', md: '2' }} textAlign="left">
          <Heading size={{ base: '', md: '' }} fontSize={'2xl'}>Selamat! Password Anda telah berhasil diperbaharui!</Heading>
          <Text color="fg.muted">Kami sangat senang memberitahu Anda bahwa password baru untuk akun SMARTWee Anda telah berhasil dibuat. Dengan password ini, Anda dapat mengakses fitur dan layanan hebat yang ditawarkan oleh aplikasi kami.</Text>
          <Text color="fg.muted">Pastikan untuk menjaga kerahasiaan password Anda dan jangan berbagi informasi ini dengan orang lain. Keamanan akun Anda sangat penting bagi kami, dan kami selalu mendorong praktik keamanan yang baik.</Text>
          <Text color="fg.muted">Jika Anda memerlukan bantuan atau memiliki pertanyaan seputar penggunaan aplikasi SMARTWee, jangan ragu untuk menghubungi tim dukungan kami. Kami akan dengan senang hati membantu Anda.</Text>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
        </Stack>
        <Stack spacing="4">
          <Button as={Link} to="/home">BACK TO LOGIN</Button>
      </Stack>
    </Stack>
    </Stack>
  </Container>
)
