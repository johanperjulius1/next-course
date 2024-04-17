import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import styles from './PostList.module.css';

function PostList() {
    const posts = useLoaderData(); // Fetch data using useLoaderData()

    return (
        <>
            {posts.length > 0 ? (
                <ul className={styles.posts}>
                    {posts.map(post => (
                        <Post key={post.id} id={post.id} author={post.author} body={post.body} />
                    ))}
                </ul>
            ) : (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are no posts yet</h2>
                    <p>Why don't you add some?</p>
                </div>
            )}
        </>
    );
}

export default PostList;
