import React, { useState, useRef } from "react";
import { addPost } from "./postSlice";
import { useDispatch } from "react-redux";
import { Form, Input, InputPost, Button } from "./styled";

const AddNewPost = () => {
    const [message, setMessage] = useState("");
    const fileInputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("message", message);
        formData.append("file", fileInputRef.current.files[0]);

        dispatch(addPost(formData));
    }

    return (
        <Form onSubmit={onFormSubmit} encType="multipart/form-data">
            <InputPost
                value={message}
                placeholder="O czym teraz myślisz?"
                onChange={({ target }) => setMessage(target.value)}
            />
            <Input
                type="file"
                ref={fileInputRef}
            />
            <Button>Dodaj post</Button>
        </Form>
    );
}

export default AddNewPost;