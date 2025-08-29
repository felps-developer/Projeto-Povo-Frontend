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
  Image,
} from "@chakra-ui/react";
import {FaGraduationCap, FaUserTie} from "react-icons/fa";
import bannerImage from "../assets/aeda40b75b57650950db0dee0cd895ddc3334eb1.png";

const Hero = () => {
  const bgGradient = useColorModeValue(
    "linear(to-br, brand.700, brand.800)",
    "linear(to-br, brand.800, brand.900)"
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
          templateColumns={{base: "1fr", md: "1fr 1fr"}}
          gap={{base: 8, md: 12}}
          alignItems="center"
        >
          <GridItem order={{base: 2, md: 1}}>
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
                fontSize={{base: "3xl", sm: "4xl", md: "5xl", lg: "6xl"}}
                fontWeight="bold"
                lineHeight="1.2"
                textShadow="2px 2px 4px rgba(0,0,0,0.3)"
              >
                Secretaria Escolar
              </Text>

              <Text
                fontSize={{base: "md", md: "lg"}}
                lineHeight="1.6"
                opacity={0.9}
                maxW="600px"
              >
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
            order={{base: 1, md: 2}}
            display="flex"
            justifyContent="center"
          >
            <Box
              w={{base: "280px", sm: "320px", md: "350px", lg: "400px"}}
              h={{base: "350px", sm: "400px", md: "450px", lg: "500px"}}
              borderRadius="xl"
              overflow="hidden"
              boxShadow="2xl"
              position="relative"
              mb={{base: 8, md: 0}}
            >
              <Image
                src={bannerImage}
                alt="Secretária Escolar"
                w="100%"
                h="100%"
                objectFit="cover"
                borderRadius="xl"
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
