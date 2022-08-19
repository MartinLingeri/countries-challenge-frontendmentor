import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";

import Country from "./interfaces/Country";

export default function SelectedCountry({ country }: { country: Country }) {
  const bgButton = useColorModeValue("white", "primary");
  const router = useRouter();

  return (
    <Stack as={Container} maxW="container.xl" paddingBlock={20} gap={20}>
      <Button
        leftIcon={<BsArrowLeft />}
        boxShadow="md"
        w="8rem"
        bg={bgButton}
        fontWeight="500"
        onClick={() => router.back()}
      >
        Back
      </Button>
      <Stack direction={{ base: "column", lg: "row" }} gap={32}>
        <Image
          src={country.flag}
          alt={country.name}
          w="35rem"
          h="25rem"
          objectFit="cover"
          boxShadow="md"
        />
        <Stack gap={8}>
          <Heading as="h1" size="lg">
            {country.name}
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} gap={16}>
            <Box>
              <Heading as="h2" size="md" fontWeight="300">
                <b>Native Name: </b>
                {country.nativeName}
              </Heading>
              <Heading as="h2" size="md" fontWeight="300">
                <b>Population: </b>
                {country.population}
              </Heading>
              <Heading as="h2" size="md" fontWeight="300">
                <b>Region: </b>
                {country.region}
              </Heading>
              <Heading as="h2" size="md" fontWeight="300">
                <b>Sub Region: </b>
                {country.subregion}
              </Heading>
              <Heading as="h2" size="md" fontWeight="300">
                <b>Capital: </b>
                {country.capital}
              </Heading>
            </Box>
            <Box>
              <Heading as="h2" size="md" fontWeight="300">
                <b>Top Level Domain: </b>
                {country.tld[0]}
              </Heading>
              <Heading as="h2" size="md" fontWeight="300">
                <b>Currecies: </b>{" "}
                {Object.keys(country.currencies)
                  .reduce(
                    (acc, curr) => acc + ", " + country.currencies[curr].name,
                    ""
                  )
                  .slice(2)}
              </Heading>
              <Heading as="h2" size="md" fontWeight="300">
                <b>Languages: </b>{" "}
                {Object.keys(country.languages)
                  .reduce(
                    (acc, curr) => acc + ", " + country.languages[curr],
                    ""
                  )
                  .slice(2)}
              </Heading>
            </Box>
          </Stack>
          <Stack direction="row">
            <Heading as="h2" size="lg">
              Border Countries:{" "}
            </Heading>
            <Stack w="100%" direction="row" flexWrap="wrap" alignItems="center">
              {country.borders.map((c) => (
                <Button
                  key={c}
                  w={16}
                  m="0.25rem !important"
                  onClick={() => router.push(`${c}`)}
                >
                  {c}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
