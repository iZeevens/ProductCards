interface IOrigin {
  name: string;
  url: string;
}

interface ILocation {
  name: string;
  url: string;
}

interface ICharacter {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
  liked?: boolean;
}

export type { ICharacter };
