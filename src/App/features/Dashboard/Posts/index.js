import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postsSlice';
import { Container, Header, Comment, File } from "./styled";
import FileComponent from './File/FileComponent';
import { fetchFileStart } from './File/fileSlice';

const Posts = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    console.log(posts)

    return (
        <>
            {posts.map((post) => (
                <Container key={post.id}>
                    <Header>
                        {post.message}
                    </Header>
                    {/* Wyświetl pliki dla danego posta */}
                    <FileComponent />
                    {/* <File key={post.id} src='http://localhost:8080/images/1/pobrany_plik.jpg' alt={`Obrazek posta ${post.id}`} width={660} /> */}
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