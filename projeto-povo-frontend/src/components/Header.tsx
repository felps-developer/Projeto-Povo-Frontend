import {
  Box,
  Flex,
  Text,
  HStack,
  Link,
  Button,
  useColorModeValue,
  Container,
  Icon,
} from "@chakra-ui/react";
import {FaUser} from "react-icons/fa";

const Header = () => {
  const bgColor = useColorModeValue("brand.700", "brand.800");
  const textColor = useColorModeValue("white", "white");

  return (
    <Box
      as="header"
      bg={bgColor}
      px={4}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      boxShadow="lg"
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color={textColor}
            textShadow="2px 2px 4px rgba(0,0,0,0.3)"
          >
            UANE
          </Text>

          <HStack spacing={8} alignItems="center">
            <HStack spacing={6}>
              <Link
                color={textColor}
                _hover={{color: "blue.200"}}
                fontWeight="medium"
              >
                CURSOS
              </Link>
              <Link
                color={textColor}
                _hover={{color: "blue.200"}}
                fontWeight="medium"
              >
                PROFESSORES
              </Link>
              <Link
                color={textColor}
                _hover={{color: "blue.200"}}
                fontWeight="medium"
              >
                SOBRE A UANE
              </Link>
              <Link
                color={textColor}
                _hover={{color: "blue.200"}}
                fontWeight="medium"
              >
                PARCERIAS
              </Link>
            </HStack>

            <Button
              leftIcon={<Icon as={FaUser} />}
              variant="outline"
              color={textColor}
              borderColor="whiteAlpha.300"
              _hover={{
                bg: "whiteAlpha.100",
                borderColor: "whiteAlpha.400",
              }}
              size="sm"
            >
              PORTAL DO ALUNO
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
