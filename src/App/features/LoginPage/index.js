import React from "react";
import Form from "./Form";
import Main from "../../common/Main";
import Section from "../../common/Section";
import {Header} from "./styled";

const LoginPage = () => {
    return (
        <Main>
            <Section header={<Header>social media</Header>}></Section>
            <Section body={<Form />}></Section>
        </Main>
    )
}

export default LoginPage;