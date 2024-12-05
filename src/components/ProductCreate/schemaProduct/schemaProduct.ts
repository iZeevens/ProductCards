import * as yup from "yup";

const validationSchema = yup.object({
  image: yup.string().url("Invalid URL").required("Image URL is required"),
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  gender: yup.string().required("Gender is required"),
  origin: yup.string().default(''),
  location: yup.string().default(''),
  species: yup.string().default(''),
  status: yup.string().default(''),
});

export { validationSchema };
