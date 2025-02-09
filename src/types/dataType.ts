interface IOrigin {
  name: string;
  url: string;
}

interface ILocation {
  name: string;
  url: string;
}

interface ICharacterBase {
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  image: string;
}

interface ICharacter extends ICharacterBase {
  id: number;
  type: string;
  origin: IOrigin;
  location: ILocation;
  episode: string[];
  url: string;
  created: string;
  liked?: boolean;
}

export type { ICharacter, ICharacterBase };
