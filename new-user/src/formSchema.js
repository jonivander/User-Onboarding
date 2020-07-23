import * as yup from 'yup'

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  name: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is Required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is Required"),
  role: yup
    .string()
    .oneOf(['tl', 'instructor', 'alumni', 'student'], "Role is required"),

  terms: yup
    .boolean()
    .oneOf([true], "YOU HAVE ANGERED THE DUCK"),
})

export default formSchema
