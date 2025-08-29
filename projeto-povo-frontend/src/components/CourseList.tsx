import {useState, useEffect} from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useColorModeValue,
} from "@chakra-ui/react";
import {FaClock, FaBook, FaCalendar, FaLaptop} from "react-icons/fa";
import CourseCard from "./CourseCard";
import {courseService} from "../services/api";
import type {Course} from "../types/Course";

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const bgColor = useColorModeValue("gray.50", "gray.900");
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const data = await courseService.getCourses();
        setCourses(data);
      } catch {
        setError("Erro ao carregar os cursos. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <Box bg={bgColor} py={20}>
        <Container maxW="container.xl">
          <VStack spacing={8}>
            <Spinner size="xl" color="blue.500" />
            <Text>Carregando cursos...</Text>
          </VStack>
        </Container>
      </Box>
    );
  }

  if (error) {
    return (
      <Box bg={bgColor} py={20}>
        <Container maxW="container.xl">
          <Alert status="error" borderRadius="lg">
            <AlertIcon />
            <AlertTitle>Erro!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </Container>
      </Box>
    );
  }

  return (
    <Box bg={bgColor} py={20} id="cursos">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={6} textAlign="center">
            <Heading
              fontSize={{base: "3xl", md: "4xl"}}
              fontWeight="bold"
              color={headingColor}
            >
              Nossos Cursos
            </Heading>
            <Text fontSize="lg" color={textColor} maxW="2xl">
              Descubra nossa seleção de cursos técnicos e de extensão
              desenvolvidos para impulsionar sua carreira profissional.
            </Text>
          </VStack>

          {/* Estatísticas dos cursos */}
          <HStack
            spacing={8}
            justify="center"
            flexWrap="wrap"
            bg="white"
            p={8}
            borderRadius="xl"
            boxShadow="lg"
            w="full"
          >
            <VStack spacing={2}>
              <HStack color="blue.500">
                <FaClock />
                <Text fontWeight="bold" fontSize="2xl">
                  1.500 horas
                </Text>
              </HStack>
              <Text fontSize="sm" color="gray.600">
                CARGA HORÁRIA
              </Text>
            </VStack>

            <VStack spacing={2}>
              <HStack color="green.500">
                <FaBook />
                <Text fontWeight="bold" fontSize="2xl">
                  7 módulos
                </Text>
              </HStack>
              <Text fontSize="sm" color="gray.600">
                CONTEÚDO
              </Text>
            </VStack>

            <VStack spacing={2}>
              <HStack color="purple.500">
                <FaCalendar />
                <Text fontWeight="bold" fontSize="2xl">
                  15 meses
                </Text>
              </HStack>
              <Text fontSize="sm" color="gray.600">
                PERÍODO DE ACESSO
              </Text>
            </VStack>

            <VStack spacing={2}>
              <HStack color="orange.500">
                <FaLaptop />
                <Text fontWeight="bold" fontSize="2xl">
                  EAD
                </Text>
              </HStack>
              <Text fontSize="sm" color="gray.600">
                MODALIDADE
              </Text>
            </VStack>
          </HStack>

          {/* Lista de cursos */}
          {courses.length > 0 ? (
            <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={8} w="full">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </SimpleGrid>
          ) : (
            <VStack spacing={4} py={12}>
              <Text fontSize="lg" color="gray.500">
                Nenhum curso disponível no momento.
              </Text>
            </VStack>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default CourseList;
