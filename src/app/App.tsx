import styled from "styled-components";

import "./styles/index.scss";
import { Footer, Header, ScrollTopButton } from "@/ui";
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
} from "@/sections";

function App() {
  return (
    <>
      <Header />
      <StyledMain>
        <Banner />
        <Messages />
        <Teachers />
        <WhyWe />
        <Bonuses />
        <Memes />
        <VideoReviews />
        <Prices />
        <NativeTeacher />
        <Motivation />
        <Contacts />
      </StyledMain>
      <Footer />
      <ScrollTopButton />
    </>
  );
}

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  padding-top: 150px;
  background-color: #e0e0e0;
  min-height: calc(100vh - 150px);
`;

export default App;
