import PostList from "./components/PostList/PostList";
import MainHeader from "./components/MainHeader/MainHeader";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const createPostHandler = () => setIsModalOpen(true);
  const modalCloseHandler = () =>  setIsModalOpen(false);
  

  return (
    <>
      <MainHeader onCreatePost={createPostHandler} />
      <main>
        <PostList isModalOpen={isModalOpen} onCloseModal={modalCloseHandler} />
      </main>
    </>
  )
}

export default App;
