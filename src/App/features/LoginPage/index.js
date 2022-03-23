import React from "react";
import Form from "./Form";
import Main from "../../common/Main";
import Section from "../../common/Section";

const LoginPage = () => {
    return (
        <Main>
            <Section header={"Logowanie do social media"}></Section>
            <Section body={<Form />}></Section>
        </Main>
    )
}

export default LoginPage;