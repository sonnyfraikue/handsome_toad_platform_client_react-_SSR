import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ForgotPassword.module.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import app from "../../firebase";
import AlertDismissable from "../Alert/Alert";
import Meta from "../Meta/Meta";

const ForgotPassword = ({ history }) => {
  const locale = useSelector((state) => state.locale);
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange",
  });

  const { isValid, isSubmitted } = formState;

  const [formErrors, setFormError] = useState({
    isVisible: false,
    message: "",
    alertType: "success",
  });

  const onSubmit = useCallback(
    async (data) => {
      app
        .auth()
        .sendPasswordResetEmail(data.email)
        .then(() => {
          // Email sent
          setFormError({
            isVisible: true,
            message: `We have sent an email to ${data.email}, check your mail and click the reset link we've provided to create a new password. Still haven't recieved it yet? `,
            alertType: "success",
            showLink: true,
            linkPath:"/forgot-password",
            linkName:"Reset form and try again"
          });
        })
        .catch((error) => {
          setFormError({
            isVisible: true,
            message: error.message,
            alertType: "warning",
            showLink: true,
            linkPath:"/forgot-password",
            linkName:"Try again"
          });
        });
    },
    [history]
  );

  return (
    <div className={styles.ForgotPassword + " container"}>
       <Meta ogtype="website" canonical={`${locale.domain}/register`} keywords="sign-in, software development, terms and conditions, handsome toad ltd" ogimage={`${locale.domain}/images/forgot_password-page.png`} ogurl={`${locale.domain}/forgot-password`} ogdescription="Forgot password? we can help you recover your credentials." ogtitle="Forgot password."/>
      <AlertDismissable
        message={formErrors.message}
        toggler={setFormError}
        isOpen={formErrors.isVisible}
        color={formErrors.alertType}
        showLink = {formErrors.showLink}
        linkPath = {formErrors.linkPath}
        linkName = {formErrors.linkName}
      ></AlertDismissable>

      <div className="row justify-content-center">
        <div className="col-sm-7 card m-3 pt-4">
          <h5 className="card-text">Recover password</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email*
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="inputEmail3"
                  autoComplete="email"
                  disabled={isSubmitted}
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
              <div className="col-sm-6">
                <button type="submit" className="btn btn-primary" disabled={!isSubmitted?!isValid:true}>
                  Continue
                </button>
                <Link className="link-primary ml-4" to="/contact">
                  Still need help?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

ForgotPassword.propTypes = {};

ForgotPassword.defaultProps = {};

export default ForgotPassword;
