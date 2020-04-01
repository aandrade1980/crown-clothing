import React from "react";

import "./custom-button.scss";

interface ICustomButton {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

export const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}: ICustomButton) => (
  <button
    className={`custom-button ${inverted && "inverted"} ${isGoogleSignIn &&
      "google-sign-in"}`}
    {...otherProps}
  >
    {children}
  </button>
);
