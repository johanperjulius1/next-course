import { useState, useEffect } from "react";
import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import styles from "./PostList.module.css"
import Modal from "../Modal/Modal";

function PostList({ isModalOpen, onCloseModal }) {

    const [posts, setPosts] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true)
            try {
                const response = await fetch('http://localhost:8080/posts', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const responseData = await response.json();
                setPosts(responseData.posts);
            } catch (error) {
                console.error('Error fetching posts:', error.message);
                // Handle error (e.g., display an error message to the user)
            } finally {
                setIsFetching(false);
            }
        }

        fetchPosts();
    }, []);

    async function addPostHandler(postData) {
        try {
            const response = await fetch('http://localhost:8080/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });

            if (!response.ok) {
                throw new Error('Failed to add post');
            }

            const responseData = await response.json(); // Parse response body as JSON
            console.log('New post added:', responseData.post);
            // If successful, close the form

        } catch (error) {
            console.error('Error adding post:', error.message);
            // Handle error (e.g., display an error message to the user)
        }
        setPosts((existingPosts) => [postData, ...existingPosts])
    }

    return (
        <>
            {isModalOpen &&
                <Modal isOpen={isModalOpen} onClose={onCloseModal} >
                    <NewPost onClose={onCloseModal} onAddPost={addPostHandler} />
                </Modal>}
            {!isFetching && posts.length > 0 ? (
                <ul className={styles.posts}>
                    {posts.map((post, index) => <Post key={index} author={post.author} body={post.body} />)}
                </ul>
            ) : (
                !isFetching && posts.length === 0 && (
                    <div style={{ textAlign: 'center', color: 'white' }}>
                        <h2>There are no posts yet</h2>
                        <p>Why don't you add some?</p>
                    </div>
                )
            )}
            {isFetching &&
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <p>Posts are loading...</p>
                </div>
            }
        </>
    )
}

export default PostList;
