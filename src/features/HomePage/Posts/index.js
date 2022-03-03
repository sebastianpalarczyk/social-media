import React from "react";
import Comments from "./Comments";
import File from "./File";
import Header from "./Header";
import { Container } from "./styled";

const Posts = () => {
    return (
        <Container>
            <Header/>
            <File />
            <Comments/>
        </Container>
    )
}

export default Posts;