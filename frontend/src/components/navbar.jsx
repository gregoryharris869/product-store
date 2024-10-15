import { Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "wouter";

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="bold"
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
        >
          <Link href="/">Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}></HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
