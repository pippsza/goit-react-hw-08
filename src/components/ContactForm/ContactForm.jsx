import css from "../ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    )
      .unwrap()
      .then(() => toast.success("Contact has added!"))
      .catch(() => {
        toast.error("Oops, try again :(");
      });
    actions.resetForm();
  };
  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be min 3 chars")
      .max(50, "Must be less then 50 chars")
      .required("This field is required"),
    number: Yup.string()
      .min(3, "Must be min 3 chars")
      .required("This field is required")
      .max(50, "Must be less then 50 chars"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label className={css.label}>Name:</label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.group}>
          <label className={css.label}>Number:</label>
          <Field className={css.input} type="text" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
