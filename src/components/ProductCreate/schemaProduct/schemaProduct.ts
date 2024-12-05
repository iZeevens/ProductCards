import * as yup from "yup";

const validationSchema = yup.object({
  image: yup.string().url("Invalid URL").required("Image URL is required"),
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  gender: yup
    .string()
    .oneOf(["Female", "Male", "Genderless", "unknown"], "Invalid gender")
    .default("unknown"),
  origin: yup.string().default(""),
  location: yup.string().default(""),
  species: yup.string().default(""),
  status: yup
    .string()
    .oneOf(["Alive", "Dead", "unknown"], "Invalid status")
    .default("unknown"),
});

export { validationSchema };
