import React from "react";

// Styled
import { CustomButtonContainer } from "./custom-button.styles";

interface ICustomButton {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

export const CustomButton = ({ children, ...props }: ICustomButton) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);
