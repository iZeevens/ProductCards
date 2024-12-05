interface ICharacter {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type { ICharacter };
