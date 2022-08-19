export default interface Country {
  name: string;
  nativeName: string;
  population: number;
  capital: string[];
  region: string;
  subregion: string;
  flag: string;
  currencies: { [id: string]: { name: string; symbol: string } };
  languages: { [id: string]: { name: string } };
  cca3: string;
  tld: string[];
  borders: string[];
}

export const countryData = ({
  name,
  altSpellings,
  population,
  capital,
  region,
  subregion,
  currencies,
  languages,
  cca3,
  flags,
  tld,
  borders,
}: {
  name: {
    common: string;
    official: string;
    nativeName: { [id: string]: { official: string; common: string } };
  };
  altSpellings: string[];
  population: number;
  capital: string;
  region: string;
  subregion: string;
  currencies: { [id: string]: { name: string; symbol: string } };
  languages: { [id: string]: { name: string } };
  cca3: string;
  flags: { png: string; jpg: string };
  tld: string[];
  borders: string[];
}) => ({
  name: name.common,
  nativeName: altSpellings[1] || "None",
  population: population.toLocaleString(),
  capital: capital || ["None"],
  region: region,
  subregion: subregion || "None",
  currencies: currencies || { None: { name: "None", symbol: "None" } },
  languages: languages || { None: { name: "None", symbol: "None" } },
  cca3,
  flag: flags.png,
  tld: tld || ["None"],
  borders: borders || ["None"],
})
