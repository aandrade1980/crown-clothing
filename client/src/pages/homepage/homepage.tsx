import React from "react";

// Components
import Directory from "../../components/directory/directory";

// Styled
import { HomePageContainer } from "./homepage.styles";

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};
