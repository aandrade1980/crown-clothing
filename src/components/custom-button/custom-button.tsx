import React from "react";

import "./custom-button.scss";

interface ICustomButton {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
}

export const CustomButton = ({ children, ...otherProps }: ICustomButton) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);
