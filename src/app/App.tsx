import styled from "styled-components";
import {
  Banner,
  Bonuses,
  Contacts,
  Footer,
  Header,
  Memes,
  Messages,
  NativeTeacher,
  Prices,
  Teachers,
  VideoReviews,
  WhyWe,
} from "../components";

import "./styles/index.scss";
import { Motivation } from "@/sections/Motivation";

function App() {
  return (
    <>
      <Header />
      <StyledMain>
        <Banner />§
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
