import { Outlet } from 'react-router-dom';
import PostList from "../components/PostList/PostList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
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
    return responseData.posts;

  } catch (error) {
    console.error('Error fetching posts:', error.message);
    return [];   }
}
