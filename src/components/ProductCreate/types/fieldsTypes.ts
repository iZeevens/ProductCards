import { IFormInputs } from "../../../types/dataType";

interface IFieldsType {
  name: keyof IFormInputs;
  label: string;
  options: string[];
}

export type { IFieldsType };
