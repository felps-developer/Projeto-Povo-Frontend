import {
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  Button,
  HStack,
  VStack,
  Badge,
  Flex,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { FaGraduationCap, FaUserTie } from 'react-icons/fa';

const Hero = () => {
  const bgGradient = useColorModeValue(
    'linear(to-br, brand.700, brand.800)',
    'linear(to-br, brand.800, brand.900)'
  );

  return (
    <Box
      bgGradient={bgGradient}
      color="white"
      minH="100vh"
      display="flex"
      alignItems="center"
      pt="80px"
    >
      <Container maxW="container.xl" py={20}>
        <Grid
          templateColumns={{base: "1fr", lg: "1fr 1fr"}}
          gap={12}
          alignItems="center"
        >
          <GridItem>
            <VStack spacing={8} align="start">
              <HStack spacing={4} flexWrap="wrap">
                <Badge
                  colorScheme="blue"
                  variant="subtle"
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontSize="sm"
                >
                  TÉCNICO
                </Badge>
                <Badge
                  colorScheme="cyan"
                  variant="subtle"
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontSize="sm"
                >
                  TECNOLOGIA E PROFISSÃO
                </Badge>
              </HStack>

              <Text
                fontSize={{base: "4xl", md: "5xl", lg: "6xl"}}
                fontWeight="bold"
                lineHeight="1.2"
                textShadow="2px 2px 4px rgba(0,0,0,0.3)"
              >
                Secretaria Escolar
              </Text>

              <Text fontSize="lg" lineHeight="1.6" opacity={0.9} maxW="600px">
                Capacite-se para atuar na gestão escolar com eficiência e
                profissionalismo. Este curso prepara você para gerenciar
                processos administrativos, documentação estudantil e garantir o
                cumprimento da legislação educacional.
              </Text>

              <HStack spacing={6}>
                <Flex align="center" gap={2}>
                  <Icon as={FaGraduationCap} boxSize={6} />
                  <Text fontWeight="bold" fontSize="lg">
                    UANE
                  </Text>
                </Flex>
                <Flex align="center" gap={2}>
                  <Icon as={FaUserTie} boxSize={6} />
                  <Text fontWeight="bold" fontSize="lg">
                    Parceiro
                  </Text>
                </Flex>
              </HStack>

              <Button
                size="lg"
                colorScheme="cyan"
                bg="cyan.500"
                _hover={{bg: "cyan.600", transform: "translateY(-2px)"}}
                _active={{bg: "cyan.700"}}
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
                borderRadius="full"
                boxShadow="lg"
                transition="all 0.3s"
              >
                Faça sua matrícula
              </Button>
            </VStack>
          </GridItem>

          <GridItem
            display={{base: "none", lg: "flex"}}
            justifyContent="center"
          >
            <Box
              w="400px"
              h="500px"
              bg="whiteAlpha.100"
              borderRadius="xl"
              border="2px dashed"
              borderColor="whiteAlpha.300"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <VStack spacing={4} color="whiteAlpha.700">
                <Icon as={FaUserTie} boxSize={16} />
                <Text fontSize="lg" textAlign="center">
                  Imagem da Secretária Escolar
                </Text>
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
