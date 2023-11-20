import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import "./footer.css"
export const Footer = () => {
  return (
    <Flex position={"sticky"} px={"6rem"} zIndex={1} alignItems={"center"} h={"10vh"} >
      <Flex flex="1" gap={"4rem"}>
          <Flex flexDir={"column"} textAlign={"left"} gap={"0.5rem"}>
            <Text >
              Muhammad Farid Suryadi
            </Text>
            <Text>
              Web Developer
            </Text>
          </Flex>
          <Flex flexDir={"column"} textAlign={"left"} gap={"0.5rem"}>
            <Text>
              Bandung
            </Text>
            <Link href="mailto:faridsuryadi27@gmail.com" className="text">
              faridsuryadi27@gmail.com
            </Link>
          </Flex>
      </Flex>

      <Flex flex="1" justifyContent="flex-end" gap={"4rem"}>
          <Flex flexDir={"column"} textAlign={"left"} gap={"0.5rem"}>
            <Text className="text">
              about
            </Text>
            <Text as={"a"} href="https://www.instagram.com/farid_suryadi/" target="_blank" className="text">
              instagram
            </Text>
          </Flex>
          <Flex flexDir={"column"} textAlign={"left"} gap={"0.5rem"}>
            <Text  as={"a"} href="https://www.linkedin.com/in/muhammadfaridsuryadi/" target="_blank" className="text">
              linkedin
            </Text>
            <Text as={"a"} href="https://github.com/faridsuryadi" target="_blank" className="text">
              github
            </Text>
          </Flex>
      </Flex>
    </Flex>
  );
};
