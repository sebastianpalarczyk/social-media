import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";
import { Container, Header, Comment, File } from "./styled";
import fantasy from "../../../images/fantasy.jpg";

const Posts = () => {

    const { posts } = useSelector(selectPosts);
    console.log(posts)

    // if (posts.length === 0) {
    //     return <NoPostsMessage>Brak dostępnych postów.</NoPostsMessage>;
    // }

    return (
        <>
            {posts.map(post => (
                <Container key={post.id}>
                    <Header>
                        {post.message}
                    </Header>
                    {/* Wyświetl pliki dla danego posta */}
                    {post.files.map(file => (
                        <File key={file.id} src={file.url} alt={`Obrazek posta ${post.id}`} width={660} />
                    ))}
                    {/* <File src={fantasy} alt={`Obrazek posta ${post.id}`} width={660} /> */}
                    <Comment>
                        {post.comment}
                    </Comment>
                </Container>
            ))}
        </>
    )
}

export default Posts;