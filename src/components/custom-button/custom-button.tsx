import React from "react";

import "./custom-button.scss";

interface ICustomButton {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  isGoogleSignIn?: boolean;
}

export const CustomButton = ({
  children,
  isGoogleSignIn,
  ...otherProps
}: ICustomButton) => (
  <button
    className={`custom-button ${isGoogleSignIn && "google-sign-in"}`}
    {...otherProps}
  >
    {children}
  </button>
);
