import { IFormTextInputs, IFromSelectInputs } from "../../../types/formsTypes";

interface ITextField {
  name: keyof IFormTextInputs;
  label: string;
}

interface ISelectField {
  name: keyof IFromSelectInputs;
  label: string;
  options: string[];
}
export type { ITextField, ISelectField };
