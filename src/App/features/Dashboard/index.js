import React from "react";
import Main from "../../common/Main";
import Section from "../../common/Section";
import Naviation from "../../common/Navigation";
import Container from "../../common/Container";
import Posts from "./Posts";
import AddNewPost from "./AddNewPost";

const Dashboard = () => {
  return (
    <Main>
      <Naviation />
      <Container>
        <Section />
        <Section header={<AddNewPost />}
          body={<Posts />} />
        <Section />
      </Container>
    </Main>
  )
}

export default Dashboard;