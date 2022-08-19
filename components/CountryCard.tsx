import {
  Heading,
  Image,
  Stack,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import Country from "./interfaces/Country";

export default function CountryCard({ country }: { country: Country }) {
  const bgColor = useColorModeValue("white", "primary");

  const router = useRouter();

  return (
    <Stack
      bgColor={bgColor}
      width="100%"
      h="21rem"
      boxShadow="md"
      borderRadius="md"
      cursor="pointer"
      _hover={{ opacity: 0.7 }}
      onClick={() => router.push(`/country/${country.cca3}`)}
    >
      <Image
        width="100%"
        height="10rem"
        objectFit="cover"
        borderTopRadius="md"
        src={country.flag}
        alt={country.name}
      />
      <Stack p={4} gap={4}>
        <Heading as="h2" size="md">
          {country.name}
        </Heading>
        <Box>
          <Heading as="h3" size="sm" fontWeight="300">
            <b>Population:</b> {country.population}
          </Heading>
          <Heading as="h3" size="sm" fontWeight="300">
            <b>Region:</b> {country.region}
          </Heading>
          <Heading as="h3" size="sm" fontWeight="300">
            <b> Capital:</b> {country.capital[0]}
          </Heading>
        </Box>
      </Stack>
    </Stack>
  );
}
