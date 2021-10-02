import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signInSchema } from "../validation";

export default function Login({ history }) {
    const [initialValues, setInitialValues] = useState({
        email: "",
        password: ""
    });

    const submitForm = (values) => {
        history.push("/questions")
    };
    return (
        <div className="AppBox">
            <div id="formContainer">
                <div className="stackLogo"><img className="stackLogoImg col-lg-offset-1" src="https://cdn.worldvectorlogo.com/logos/stack-overflow.svg" /></div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={signInSchema}
                    onSubmit={submitForm}
                >
                    {(formik) => {
                        const { errors, touched, isValid, dirty } = formik;
                        return (
                            <div className="container">
                                <Form className="loginForm">
                                    <div className="form-row">
                                        <label htmlFor="email">Email</label>
                                        <Field
                                            type="email"
                                            name="email"
                                            id="email"
                                            className={errors.email && touched.email ?
                                                "input-error" : null}
                                        />
                                        <ErrorMessage name="email" component="span" className="error" />
                                    </div>

                                    <div className="form-row">
                                        <label htmlFor="password">Password</label>
                                        <Field
                                            type="password"
                                            name="password"
                                            id="password"
                                            className={errors.password && touched.password ?
                                                "input-error" : null}
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="span"
                                            className="error"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className={!(dirty && isValid) ? "disabled-btn" : ""}
                                        disabled={!(dirty && isValid)}
                                        id="submitBtn"
                                    >
                                        Sign In
                                    </button>
                                </Form>
                            </div>
                        );
                    }}
                </Formik>
            </div>
        </div>
    )
}