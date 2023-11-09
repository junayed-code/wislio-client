import { Form, Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  Button,
  Container,
  Section,
  Field,
  FieldPassword,
  Loading,
} from "../components";
import { useAuth } from "../hooks";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
  uname: "",
  photoURL: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const navigate = useNavigate();
  const { loading, createNewUser, logInWithGoogle } = useAuth();

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values, { resetForm, setFieldError }) => {
      try {
        const { uname, email, password, photoURL } = values;
        await createNewUser(uname, email, password, photoURL);

        // Clear the form field.
        resetForm();
        navigate("/");
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          setFieldError("email", "This email is already used.");
        }
      }
    },
  });

  const handleLogInWithGoogle = () => {
    logInWithGoogle().then(() => navigate("/"));
  };

  if (loading || isSubmitting) return <Loading />;

  return (
    <Section className="min-h-[calc(100vh-80px)] px-2 py-8">
      <Container className="relative">
        <Section.Content className="bg-base-100 w-full">
          <Section.Title className="text-center mb-5">
            Sign Up Your Account
          </Section.Title>
          <Form
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto flex flex-col gap-2"
          >
            <Field
              label="Your name"
              id="uname"
              placeholder="Enter your name"
              value={values.uname}
              error={touched.uname && errors.uname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              label="Your Photo URL"
              id="photoURL"
              placeholder="Enter photo URL"
              value={values.photoURL}
              error={touched.photoURL && errors.photoURL}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              label="Your email"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={values.email}
              error={touched.email && errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FieldPassword
              label="Your password"
              id="password"
              placeholder="Enter your password"
              value={values.password}
              error={touched.password && errors.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button type="submit" className="text-lg btn-primary mt-3">
              Sign Up
            </Button>

            <div className="divider">OR</div>

            <Button
              onClick={handleLogInWithGoogle}
              className="text-lg btn-secondary btn-outline w-full flex items-center gap-2 mb-2"
            >
              <FcGoogle className="text-xl mt-[2px]" />
              Login with Google
            </Button>

            <p className="mt-3">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-500 hover:underline">
                Sign In
              </Link>
            </p>
          </Form>
        </Section.Content>
      </Container>
    </Section>
  );
}
