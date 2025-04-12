import css from "./Form.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
export default function LogRegForm({ bttnMessage }) {
  const UserSchema = Yup.object().shape({
    email: Yup.string()
      .min(3, "Must be min 3 chars")
      .max(50, "Must be less then 50 chars")
      .required("This field is required"),
    password: Yup.string()
      .min(8, "Must be min 8 chars")
      .required("This field is required")
      .max(50, "Must be less then 50 chars"),
  });
  const handleSubmit = (values, actions) => {
    // dispatch(
    //   addContact({
    //     email: values.email,
    //     password: values.password,
    //   })
    // );
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={UserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.group}>
            <label className={css.label}>Email:</label>
            <Field className={css.input} type="email" name="email" />
            <ErrorMessage className={css.error} name="email" component="span" />
          </div>
          <div className={css.group}>
            <label className={css.label}>Password:</label>
            <Field className={css.input} type="password" name="password" />
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </div>
          <button className={css.button} type="submit">
            {bttnMessage}
          </button>
        </Form>
      </Formik>
    </>
  );
}
