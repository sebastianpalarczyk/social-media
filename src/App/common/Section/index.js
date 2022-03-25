import React from "react";
import { Container } from "./styled";

const Section = ({ header, body, primary }) => {
    return (
        <Container>
            {header}
            {body}
        </Container>
    )
}

export default Section;