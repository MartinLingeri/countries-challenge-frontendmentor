import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import Header from "components/Header";
import SelectedCountry from "components/SelectedCountry";
import { GetStaticPropsContext } from "next";

import Country from "components/interfaces/Country";
import { countryData } from "components/interfaces/Country";

export default function CountryPage({ country }: { country: Country }) {
  const bg = useColorModeValue("white", "secondary");
  return (
    <main>
      <Box bgColor={bg} minH="100vh">
        <Header />
        <SelectedCountry country={country} />
      </Box>
    </main>
  );
}

export async function getStaticPaths() {
  const countries = await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((res) => res.map(({ cca3 }: { cca3: string }) => cca3));
  return {
    paths: countries.map((country: string) => ({ params: { id: country } })),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.id;

  if (id) {
    const country = await fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => res.json())
      .then((res) => res[0])
      .then(countryData)
      .catch((err) => console.log(err));
    return {
      props: { country },
    };
  }

  return {
    notFound: true,
  };
}
