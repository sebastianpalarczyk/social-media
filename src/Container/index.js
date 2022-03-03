import React from "react";
import Section from "./Section";
import { Div } from "./styled";

const Container = () => {
    return (
        <Div>
            <Section>
              Pierwsza sekcja
            </Section>
            <Section>
              Druga sekcja
            </Section>
            <Section>
              Trzecia sekcja
            </Section>
        </Div>
    )
}



export default Container;