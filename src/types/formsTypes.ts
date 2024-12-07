import { ICharacterBase } from "./dataType";
import { Control } from "react-hook-form";

interface IFromSelectInputs {
  status: "Alive" | "Dead" | "unknown";
  gender: "Female" | "Male" | "Genderless" | "unknown";
}

interface IFormTextInputs extends ICharacterBase {
  origin: string;
  location: string;
}

interface IFieldsTextType {
  name: keyof IFormTextInputs;
  control: Control<IFormTextInputs>;
  label: string;
}

interface IFieldsSelectType {
  name: keyof IFormTextInputs;
  control: Control<IFormTextInputs>;
  options: string[];
  label: string;
}


export type { IFieldsTextType, IFieldsSelectType, IFormTextInputs, IFromSelectInputs };
