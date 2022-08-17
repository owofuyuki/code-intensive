import "./App.css";
import { useFormik } from "formik";
import * as yup from "yup";

function App() {
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
    password: yup
      .string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validationSchema,
  });

  console.log(formik.errors);

  return (
    <div className="form">
      <h2 className="form-title">My Form using Formik</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-block">
          <label>Username</label>
          <input
            type="text"
            value={formik.values.username}
            onChange={formik.handleChange}
            name="username"
          />
        </div>
        <div className="form-block">
          <label>Password</label>
          <input
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
          />
        </div>
        <div className="form-block">
          <label>Remember me</label>
          <input
            type="checkbox"
            value={formik.values.rememberMe}
            onChange={formik.handleChange}
            name="rememberMe"
          />
        </div>
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
