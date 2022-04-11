import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import app from "../../firebase";
import { withRouter } from "react-router-dom";
import AlertDismissable from "../Alert/Alert";
import { useSelector, useDispatch } from "react-redux";
import Meta from "../Meta/Meta";
import {config} from "../../../config";

const redirectPath = process.env.NODE_ENV == 'development' ? '/dashboard':'/under_construction';

const Login = ({ history, ...rest }) => {
  const locale = useSelector((state) => state.locale);
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange",
  });
  const { isValid } = formState;

  const [formErrors, setFormError] = useState({
    isVisible: false,
    message: "",
  });

  const onSubmit = useCallback(
    async (data) => {
      app
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          // Signed in
          dispatch({
            type: "login",
            payload: userCredential.user,
          });
          
          return <Redirect to={redirectPath} />
        })
        .catch((error) => {
          setFormError({ isVisible: true, message: error.message });
        });
    },
    [history]
  );

  if (!currentUser) {
    return (
      <div className="container">
        <Meta ogtype="website" canonical={`${locale.domain}/login`} keywords="sign-in, software development, terms and conditions, handsome toad ltd" ogimage={`${locale.domain}/images/login-page.png`} ogurl={`${locale.domain}/login`} ogdescription="Login securely and get work done." ogtitle="Login securely and get work done."/>
        <AlertDismissable
          message={formErrors.message}
          toggler={setFormError}
          isOpen={formErrors.isVisible}
          color="warning"
        ></AlertDismissable>
        <div className="row justify-content-center">
          <div className="col-sm-7 card m-3 pt-4">
            <h5 className="card-text">Sign in</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row mb-3">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="form-control"
                    id="inputEmail3"
                    aria-describedby="emailHelp"
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                      },
                    })}
                  />

                  <div className="text-warning">
                    {errors.email && errors.email.type === "required" && (
                      <span>
                        This <b>email</b> value is required
                      </span>
                    )}
                  </div>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                >
                  Password
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    className="form-control"
                    id="inputPassword3"
                    ref={register({ required: true })}
                  />

                  <div className="text-warning">
                    {errors.password && errors.password.type === "required" && (
                      <span>
                        This <b>password</b> value is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-sm-6">
                  <button
                    disabled={!isValid}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Sign in
                  </button>
                  <Link className="link-primary ml-4" to="/forgot-password">
                    Forgot your password?
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }else{
    return <Redirect to={redirectPath} />;
  }
};

export default Login;
