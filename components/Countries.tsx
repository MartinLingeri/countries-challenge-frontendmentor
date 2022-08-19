import {
  Box,
  Container,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import Country from "./interfaces/Country";
import CountyCard from "components/CountryCard";

export default function Countries({ countries }: { countries: Country[] }) {
  const bgElements = useColorModeValue("white", "primary");
  const inputColor = useColorModeValue("primary", "white");

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  return (
    <Stack as={Container} maxW="container.xl" paddingBlock={12} gap={8}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        gap={{ base: 8, sm: 0 }}
      >
        <InputGroup
          width={{ base: "100%", md: "30rem" }}
          bgColor={bgElements}
          h={14}
          boxShadow="md"
          borderRadius="md"
          _hover={{ opacity: "0.7" }}
        >
          <InputLeftElement h="100%" paddingLeft={6} pointerEvents="none">
            <FaSearch />
          </InputLeftElement>
          <Input
            value={search}
            bgColor={bgElements}
            paddingLeft={16}
            h="100%"
            variant="filled"
            placeholder="Search for a country..."
            _placeholder={{ color: `${inputColor}` }}
            _hover={{ opacity: "0.7" }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
        <Select
          value={region}
          width="12.5rem"
          variant="filled"
          size="md"
          bgColor={bgElements}
          h={14}
          placeholder="Filter by Region"
          boxShadow="md"
          borderRadius="md"
          _hover={{ opacity: "0.7" }}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </Select>
      </Stack>
      <Grid
        gap="4rem 4.5rem"
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
      >
        {countries &&
          countries
            .filter((country) => country.region.includes(region))
            .filter((country) => country.name.toLowerCase().includes(search))
            .map((country: Country) => (
              <CountyCard key={country.name} country={country} />
            ))}
      </Grid>
    </Stack>
  );
}
