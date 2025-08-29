import {
  Box,
  Image,
  Text,
  Badge,
  VStack,
  HStack,
  Button,
  useColorModeValue,
  Icon,
  Flex,
} from "@chakra-ui/react";
import {FaClock, FaBook, FaCalendar, FaLaptop, FaUser} from "react-icons/fa";
import type {Course} from "../types/Course";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({course}: CourseCardProps) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      bg={bgColor}
      borderRadius="xl"
      overflow="hidden"
      boxShadow="lg"
      border="1px solid"
      borderColor={borderColor}
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "xl",
      }}
    >
      <Box position="relative">
        <Image
          src={
            course.image ||
            "https://via.placeholder.com/400x250/4A90E2/FFFFFF?text=Curso"
          }
          alt={course.title}
          w="full"
          h="250px"
          objectFit="cover"
        />
        <Badge
          position="absolute"
          top={4}
          left={4}
          colorScheme="blue"
          variant="solid"
          borderRadius="full"
          px={3}
          py={1}
        >
          {course.category}
        </Badge>
      </Box>

      <VStack p={6} spacing={4} align="start">
        <Text
          fontSize="xl"
          fontWeight="bold"
          color={useColorModeValue("gray.800", "white")}
          noOfLines={2}
        >
          {course.title}
        </Text>

        <Text
          fontSize="sm"
          color={useColorModeValue("gray.600", "gray.300")}
          noOfLines={3}
        >
          {course.description}
        </Text>

        <VStack spacing={2} align="start" w="full">
          <HStack spacing={4} fontSize="sm" color="gray.500">
            <Flex align="center" gap={2}>
              <Icon as={FaClock} />
              <Text>{course.workload}</Text>
            </Flex>
            <Flex align="center" gap={2}>
              <Icon as={FaBook} />
              <Text>{course.modules} módulos</Text>
            </Flex>
          </HStack>

          <HStack spacing={4} fontSize="sm" color="gray.500">
            <Flex align="center" gap={2}>
              <Icon as={FaCalendar} />
              <Text>{course.accessPeriod}</Text>
            </Flex>
            <Flex align="center" gap={2}>
              <Icon as={FaLaptop} />
              <Text>{course.modality}</Text>
            </Flex>
          </HStack>
        </VStack>

        <HStack justify="space-between" w="full" pt={2}>
          <VStack align="start" spacing={1}>
            <Text fontSize="sm" color="gray.500">
              Por <Icon as={FaUser} mx={1} />
              {course.instructor}
            </Text>
            <Text fontSize="xl" fontWeight="bold" color="green.500">
              {course.price}
            </Text>
          </VStack>

          <Button colorScheme="blue" size="sm" borderRadius="full" px={6}>
            Ver detalhes
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CourseCard;
