import React from "react";

// Components
import SignIn from "../../components/sign-in";
import SignUp from "../../components/sign-up";

import "./sign-in-sign-out.scss";

export const SignInSignOutPage = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <SignUp />
  </div>
);
