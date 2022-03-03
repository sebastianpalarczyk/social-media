import React from "react";
import Main from "../../common/Main";
import Section from "../../common/Section";
import Naviation from "../../common/Navigation";
import Container from "../../common/Container";
import Posts from "./Posts";

const HomePage = () => {
  return (
    <Main>
      <Naviation />
      <Container>
        <Section/>
        <Section body={<Posts/>}/>
        <Section/>
      </Container>
    </Main>
  )
}

export default HomePage;