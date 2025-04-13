import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import toast from "react-hot-toast";
import * as Yup from "yup";
export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => toast.success("You've registered!"))
      .catch(() => {
        toast.error("Incorrect email or password!");
      });
    actions.resetForm();
  };
  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be min 3 chars")
      .max(50, "Must be less then 50 chars")
      .required("This field is required"),
    email: Yup.string()
      .min(3, "Must be min 3 chars")
      .required("This field is required")
      .max(50, "Must be less then 50 chars"),
    password: Yup.string()
      .min(8, "Must be min 8 chars")
      .required("This field is required")
      .max(50, "Must be less then 50 chars"),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />{" "}
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />{" "}
          <ErrorMessage className={css.error} name="email" component="span" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />{" "}
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
