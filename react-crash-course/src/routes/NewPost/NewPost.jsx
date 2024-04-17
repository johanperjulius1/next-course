import { Link, Form, redirect } from "react-router-dom";
import styles from "./NewPost.module.css"
import Modal from "../../components/Modal/Modal";

function NewPost() {

    return (
        <Modal>
            <Form method="post" className={styles.form}>
                <p>
                    <label htmlFor="name"> Your name</label>
                    <input
                        type="text"
                        id="name"
                        name="author"
                        placeholder="Ett placeholder namn..."
                        required
                    />
                </p>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea
                        id="body"
                        name="body"
                        required rows={3}
                        placeholder={'Det här är en placeholder...'}
                    />
                </p>
                <p className={styles.actions}>
                    <Link to=".." type="button">Cancel</Link>
                    <button type="submit">Create post </button>
                </p>
            </Form>
        </Modal>
    )
}

export default NewPost

export async function action({ request }) {
    const formData = await request.formData()
    const postData = Object.fromEntries(formData)
    try {
        const response = await fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }

        return redirect('/')
    } catch (error) {
        console.error('Error fetching posts:', error.message);
        return [];
    }
}