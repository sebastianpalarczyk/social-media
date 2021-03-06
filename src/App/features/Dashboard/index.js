import React from "react";
import Main from "../../common/Main";
import Section from "../../common/Section";
import Naviation from "../../common/Navigation";
import Container from "../../common/Container";
import Posts from "./Posts";
import AddNewPost from "./Posts/AddNewPost";
import Contacts from "./Contacts";

const Dashboard = () => {
  const primary = "primary";
  return (
    <Main primary={primary}>
      <Naviation />
      <Container>
        <Section />
        <Section header={<AddNewPost />}
          body={<Posts />} />
        <Section body={<Contacts/>} />
      </Container>
    </Main>
  )
}

export default Dashboard;