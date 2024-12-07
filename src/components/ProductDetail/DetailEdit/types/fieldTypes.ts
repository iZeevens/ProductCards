import { Control } from "react-hook-form";

interface IFromData {
  name: string;
  species: string;
  status: string;
  gender: string;
  originName: string;
  locationName: string;
}

interface IFormInputProps {
  name: keyof IFromData;
  control: Control<IFromData>;
  label: string;
}

export type { IFromData, IFormInputProps };
