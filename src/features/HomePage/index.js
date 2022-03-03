import React from "react";
import Container from "../../common/Container";
import { Section } from "../../common/Section/styled";
import Naviation from "../../common/Navigation";

const HomePage = () => {
    return (
        <Container>
         <Naviation/>
         <Section>
           sekcja 1
         </Section>
         <Section>
           sekcja 2
         </Section>
         <Section>
           sekcja 3
         </Section>
        </Container>
    )
}

export default HomePage;