import styled from "styled-components";

import "./styles/index.scss";
import { Footer, Header } from "@/ui";
import {
  Banner,
  Messages,
  Teachers,
  WhyWe,
  Bonuses,
  Memes,
  VideoReviews,
  Prices,
  NativeTeacher,
  Contacts,
  Motivation,
  TextReviews,
} from "@/sections";

function App() {
  return (
    <>
      <Header />
      <StyledMain>
        <Banner />
        <VideoReviews />
        <Messages />
        <Teachers />
        <WhyWe />
        <Bonuses />
        <Memes />
        <TextReviews />
        <Prices />
        <NativeTeacher />
        <Motivation />
        {/* <PrivateTelegramChannel /> */}
        <Contacts />
      </StyledMain>
      <Footer />
    </>
  );
}

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  padding-top: 13rem;
  background-color: #e0e0e0;

  @media screen and (max-width: 1110px) {
    padding-top: 10rem;
  }

  @media screen and (max-width: 768px) {
    padding-top: 8rem;
  }
`;

export default App;
