import React, { useState } from "react";
import { addPost } from "./postSlice";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "./styled";

const AddNewPost = () => {
    const [message, setMessage] = useState("");
    const [file, setFile] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(file)

        dispatch(addPost({
            message,
            file
        }))
    }

    return (
        <Form onSubmit={onFormSubmit} encType="multipart/form-data">
            <Input
                value={message}
                placeholder="O czym teraz myślisz?"
                onChange={({ target }) => setMessage(target.value)} />
            <Input
                type="file"
                value={file}
                onChange={({ target }) => this.setFile(target)} />
            <Button>Dodaj post</Button>
        </Form>
    )
}
export default AddNewPost;