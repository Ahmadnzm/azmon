import React from "react";
import { useFormik} from "formik";
import { userSchema } from "../validation/userValidation";

const Login = ({ enterUser}) => {

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      enterUser(values);
    },
  });

  

  return (
    <section id="login-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-3">
            <div className="card pt-2 px-3 login-card">
              <h5 className="opacity-75 fw-bold text-center mb-3">ورود</h5>

              <form onSubmit={formik.handleSubmit}>
                <div className="text-end login mb-3">
                  <label className="fw-bold form-label opacity-50">
                    نام کاربری
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="0015151515"
                    className="form-control"
                    // name="userName"
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.userName}
                    {...formik.getFieldProps("username")}
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <div className="text-danger">{formik.errors.username}</div>
                  ) : null}
                </div>
                <div className="text-end login mb-3">
                  <label className="fw-bold form-label opacity-50">
                    کلمه عبور
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="******"
                    className="form-control"
                    // name="password"
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.password}
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-danger">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="row mx-auto mb-2">
                  <input
                    className="btn btn-warning btnEnter fw-bold"
                    type="submit"
                    value="ورود"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
