import React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("white", "primary");

  return (
    <header>
      <Stack
        bgColor={bg}
        h={20}
        alignItems="center"
        justifyContent="center"
        boxShadow="md"
      >
        <Stack
          as={Container}
          maxW="container.xl"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/">
            <Heading as="h1" fontSize={{ base: 16, md: 24 }} cursor="pointer">
              Where in the world?
            </Heading>
          </Link>
          <Button
            leftIcon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            variant="outline"
            border="none"
            borderRadius={9999}
            size={{ base: "sm", sm: "md" }}
            onClick={toggleColorMode}
          >
            {colorMode === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
        </Stack>
      </Stack>
    </header>
  );
}
