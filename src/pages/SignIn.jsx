import { Form, Link, useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Section,
  Field,
  FieldPassword,
} from "../components";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { signInSchema } from "../schemas";
import { useAuth } from "../hooks";

const initialValues = {
  email: "",
  password: "",
};

export default function SignIn() {
  const navigate = useNavigate();
  const { signIn, logInWithGoogle } = useAuth();

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: signInSchema,
      onSubmit: async (values, { resetForm, setFieldError }) => {
        try {
          const { email, password } = values;
          await signIn(email, password);

          // Clear the form field and navigate the home page.
          resetForm();
          navigate("/");
        } catch (err) {
          setFieldError(
            "password",
            "Incorrect email or password! Please try again."
          );
        }
      },
    });

  const handleLogInWithGoogle = () => {
    logInWithGoogle().then(user => {
      if (user) navigate("/");
    });
  };

  return (
    <Section className="min-h-[calc(100vh-80px)] px-2 py-8">
      <Container className="relative">
        <Section.Content className="bg-base-100 w-full">
          <Section.Title className="text-center mb-5">
            Webcome Back
          </Section.Title>
          <Form
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto flex flex-col gap-2"
          >
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
            <Button type="submit" className={`text-lg btn-primary mt-3`}>
              Sign In
            </Button>

            <div className="divider">OR</div>

            <Button
              onClick={handleLogInWithGoogle}
              className="text-lg btn-neutral btn-outline w-full flex items-center gap-2 mb-2"
            >
              <FcGoogle className="text-xl mt-[2px]" />
              Google
            </Button>

            <p className="mt-3">
              New to Wislio?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </Form>
        </Section.Content>
      </Container>
    </Section>
  );
}
