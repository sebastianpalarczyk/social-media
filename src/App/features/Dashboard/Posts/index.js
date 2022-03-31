import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";
import { Container, Header, Comment, File } from "./styled";
import fantasy from "../../../images/fantasy.jpg";

const Posts = () => {

    const { posts } = useSelector(selectPosts);
    console.log(posts)

    return (

        <>
            {posts.map(post => (
                <Container key={post.id}>
                    <Header>
                        {post.message}
                    </Header>
                    <File src={fantasy} alt="obrazek" width={660}/>
                    <Comment>
                        {post.comment}
                    </Comment>
                </Container>
            ))}

        </>
    )
}

export default Posts;