import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useColorModeValue,
  Container,
  Icon,
  IconButton,
  VStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
} from "@chakra-ui/react";
import {FaUser, FaBars} from "react-icons/fa";

const Header = () => {
  const bgColor = useColorModeValue("brand.700", "brand.800");
  const textColor = useColorModeValue("white", "white");
  const {isOpen, onOpen, onClose} = useDisclosure();

  const menuItems = [
    {label: "CURSOS", href: "#"},
    {label: "PROFESSORES", href: "#"},
    {label: "SOBRE A UANE", href: "#"},
    {label: "PARCERIAS", href: "#"},
  ];

  return (
    <>
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
            <Image
              src="/logo.png"
              alt="UANE Logo"
              h={{base: "8", md: "10"}}
              objectFit="contain"
            />

            {/* Desktop Menu */}
            <HStack
              spacing={8}
              alignItems="center"
              display={{base: "none", lg: "flex"}}
            >
              <HStack spacing={6}>
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    color={textColor}
                    _hover={{color: "blue.200"}}
                    fontWeight="medium"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
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

            {/* Mobile Menu Button */}
            <IconButton
              display={{base: "flex", lg: "none"}}
              icon={<Icon as={FaBars} />}
              variant="ghost"
              color={textColor}
              onClick={onOpen}
              aria-label="Abrir menu"
              _hover={{bg: "whiteAlpha.100"}}
            />
          </Flex>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={bgColor}>
          <DrawerCloseButton color={textColor} />
          <DrawerHeader
            color={textColor}
            borderBottom="1px solid"
            borderColor="whiteAlpha.200"
          >
            Menu UANE
          </DrawerHeader>
          <DrawerBody pt={6}>
            <VStack spacing={6} align="stretch">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  color={textColor}
                  fontWeight="medium"
                  fontSize="lg"
                  py={2}
                  px={4}
                  borderRadius="md"
                  _hover={{color: "blue.200", bg: "whiteAlpha.100"}}
                  href={item.href}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}

              <Button
                leftIcon={<Icon as={FaUser} />}
                variant="outline"
                color={textColor}
                borderColor="whiteAlpha.300"
                _hover={{
                  bg: "whiteAlpha.100",
                  borderColor: "whiteAlpha.400",
                }}
                size="lg"
                mt={4}
              >
                PORTAL DO ALUNO
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
