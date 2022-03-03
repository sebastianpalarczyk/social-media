import React from "react";
import { Container } from "./styled";
import fantasy from "../../../../images/fantasy.jpg";


const File = () => {
    return (
        <Container>
         <img src={fantasy} alt="obrazek" width={750}/>
        </Container>
    )
}

export default File;