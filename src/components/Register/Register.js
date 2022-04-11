import React, { useCallback, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Redirect, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Register.module.scss";
import ImageGen from "../ImageGen/ImageGen";
import app from "../../firebase";
import { AuthContext } from "../../contexts/AuthContext";
import { withRouter } from "react-router-dom";
import AlertDismissable from "../Alert/Alert";
import Meta from "../Meta/Meta";
import { useSelector, useDispatch } from "react-redux";
import Regtitle from "../Regtitle/Regtitle";

const Register = ({ history }) => {
  let params = useParams()
  const locale = useSelector((state) => state.locale);
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange",
  });
  const { isValid } = formState;
  var min = 100000000;
  var max = 200000000;
  const rand = parseInt(min + Math.random() * (max - min));
  const [formErrors, setFormError] = useState({
    isVisible: false,
    message: "",
  });

  const [formCaptcha, setFormCaptcha] = useState({
    captcha: rand,
  });

  const onSubmit = useCallback(
    async (data) => {
      if (parseInt(data.captcha) !== parseInt(data.captchaGen)) {
        setFormError({
          isVisible: true,
          message: "The captcha value provided doesnt match",
        });
      } else {
        try {
          await app
            .auth()
            .createUserWithEmailAndPassword(data.email, data.password);
          history.push("/login");
        } catch (error) {
          setFormError({ isVisible: true, message: error.message });
        }
      }
    },
    [history]
  );

  const currentUser = useSelector((state) => state.currentUser);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      <div className={`${styles.Register} container`}>
         <Meta ogtype="website" canonical={`${locale.domain}register`} keywords="sign-in, software development, terms and conditions, handsome toad ltd" ogimage={`${locale.domain}images/register-page.png`} ogurl={`${locale.domain}register`} ogdescription="Sign up today and build your dreams." ogtitle="Create your account."/>
        <AlertDismissable
          message={formErrors.message}
          toggler={setFormError}
          isOpen={formErrors.isVisible}
          color="warning"
        ></AlertDismissable>
        <div className="row justify-content-center">
          <div className="col-sm-7 card m-3 pt-4">
            <Regtitle registerplan={params.registerplan} registerpackage={params.registerpackage} />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row mb-3">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Last name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputlastname"
                    autoComplete="family-name"
                    name="lastname"
                    ref={register({ required: "This is required message" })}
                  />
                  <div className="text-warning">
                    {errors.lastname && errors.lastname.type === "required" && (
                      <span>
                        This is <b>lastname</b> value required
                      </span>
                    )}
                  </div>
                </div>
              </div>

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
                    className="form-control"
                    id="inputEmail3"
                    autoComplete="email"
                    name="email"
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
                    className="form-control"
                    id="inputPassword3"
                    name="password"
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
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                >
                  Captcha
                </label>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    id="captcha01"
                    name="captcha"
                    ref={register({ required: true })}
                  />
                  <div className="text-warning">
                    {errors.captcha && errors.captcha.type === "required" && (
                      <span>
                        This <b>captcha</b> is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-sm-4">
                  <input
                    type="hidden"
                    className="form-control"
                    id="captchaGen"
                    value={formCaptcha.captcha}
                    name="captchaGen"
                    ref={register({ required: true })}
                  />
                  <ImageGen name={formCaptcha.captcha} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <button
                    disabled={!isValid}
                    type="submit"
                    className={`${styles['sign-up']} btn btn-primary`}
                  >
                    Sign up
                  </button>
                <span className={`${styles['login-link']} ml-4`}>Already have an account?</span>
                  <Link className="link-primary ml-2" to="/login">
                    sign in.
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(Register);
