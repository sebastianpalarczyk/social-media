import React from "react";
import { Container } from "./styled";

const Section = ({ header, body }) => {
    return (
        <Container>
            {header}
            {body}
        </Container>
    )
}

export default Section;