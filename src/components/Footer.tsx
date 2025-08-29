import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Icon,
  VStack,
  HStack,
  Link,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="blue.700" color="white">
      <Container maxW="container.xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
          {/* Logo e descrição */}
          <Stack gap={6}>
            <Text fontSize="2xl" fontWeight="bold">
              UANE
            </Text>
            <Text fontSize="sm" opacity={0.8}>
              Formação profissional de qualidade para impulsionar sua carreira.
            </Text>
          </Stack>

          {/* Informações */}
          <Stack gap={4}>
            <Text fontWeight="bold" fontSize="lg">
              Informações
            </Text>
            <VStack align="start" gap={2}>
              <Link href="#" _hover={{ color: 'blue.200' }} fontSize="sm">
                Perguntas Frequentes
              </Link>
              <Link href="#" _hover={{ color: 'blue.200' }} fontSize="sm">
                Política de Privacidade
              </Link>
              <Link href="#" _hover={{ color: 'blue.200' }} fontSize="sm">
                Termos de Uso
              </Link>
            </VStack>
          </Stack>

          {/* Contato */}
          <Stack gap={4}>
            <Text fontWeight="bold" fontSize="lg">
              Fale conosco
            </Text>
            <VStack align="start" gap={3}>
              <HStack>
                <Icon as={FaPhone} />
                <Text fontSize="sm">(85) 99332-8888</Text>
              </HStack>
              <HStack>
                <Icon as={FaMapMarkerAlt} />
                <Text fontSize="sm">
                  Av. Aguanambi, 282 - Joaquim Távora, Fortaleza - CE
                </Text>
              </HStack>
            </VStack>
          </Stack>

          {/* Redes sociais */}
          <Stack gap={4}>
            <Text fontWeight="bold" fontSize="lg">
              Nos acompanhe nas redes sociais
            </Text>
            <HStack gap={4}>
              <Link
                href="#"
                _hover={{ color: 'blue.200' }}
                transition="color 0.3s"
              >
                <Icon as={FaFacebook} boxSize={6} />
              </Link>
              <Link
                href="#"
                _hover={{ color: 'blue.200' }}
                transition="color 0.3s"
              >
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
              <Link
                href="#"
                _hover={{ color: 'blue.200' }}
                transition="color 0.3s"
              >
                <Icon as={FaYoutube} boxSize={6} />
              </Link>
            </HStack>
          </Stack>
        </SimpleGrid>

        {/* Linha inferior */}
        <Box borderTop="1px solid" borderColor="whiteAlpha.200" mt={8} pt={8}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align={{ base: 'start', md: 'center' }}
          >
            <Text fontSize="sm" opacity={0.8}>
              Av. Aguanambi, 282 - Joaquim Távora, Fortaleza - CE, 60055-402
            </Text>
            <Text fontSize="sm" opacity={0.8}>
              EXPEDIENTE
            </Text>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
