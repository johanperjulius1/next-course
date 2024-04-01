import { useState } from "react";

import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import styles from "./PostList.module.css"
import Modal from "../Modal/Modal";

function PostList({ isModalOpen, onCloseModal }) {
	const [posts, setPosts] = useState([])

	function addPostHandler(postsData) {
		setPosts((existingPosts) => [postsData, ...existingPosts])
	}

	return (
		<>
			{isModalOpen &&
				<Modal isOpen={isModalOpen} onClose={onCloseModal} >
					<NewPost onClose={onCloseModal} onAddPost={addPostHandler} />
				</Modal>}
			{posts.length > 0 ? (
				<ul className={styles.posts}>
					{posts.map((post, index) => <Post key={index} author={post.author} body={post.body} />)}
				</ul>
			) : (
				<div style={{ textAlign: 'center', color: 'white' }}>
					<h2>There are no posts yet</h2>
					<p>Why don't you add some?</p>
				</div>
			)}
		</>
	)
}

export default PostList;
