import styles from "./NewPost.module.css"
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

function NewPost({ onClose, onAddPost }) {

    const [authorName, setAuthorName] = useState("");
    const [bodyText, setBodyText] = useState("");

    const authorChangeHandler = (event) => {
        setAuthorName(event.target.value)
    };

    const bodyChangeHandler = (event) => {
        setBodyText(event.target.value)
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        const postData = ({
            author: authorName,
            body: bodyText
        });

        



    }

    return (
        <Modal>
        <form className={styles.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="name"> Your name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Ett placeholder namn..."
                    required onChange={authorChangeHandler} />
            </p>
            <p>
                <label htmlFor="body">Text</label>
                <textarea
                    id="body"
                    required rows={3}
                    placeholder={'Det här är en placeholder...'}
                    onChange={bodyChangeHandler} />
            </p>
            <p className={styles.actions}>
                <button type="button">Cancel</button>
                <button type="submit">Create post </button>
            </p>

        </form>
        </Modal>
    )
}

export default NewPost