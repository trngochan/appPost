import Header from "./components/header/header.js";
import "./app.css";
import { useState } from "react";
import EditPage from "./components/edit/editPage.js";
import { useSelector } from "react-redux";
import Footer from "./components/footer/footer.js";
import MakePost from "./components/post/makePost.js";
import Posts from "./components/post/post.js";

function App() {
  const [isEdit, setEdit] = useState(false);
  const [isOpenPost, setOpenPost] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  return (
    <div className="App">
      {isEdit ? (
        <EditPage setEdit={setEdit} />
      ) : !isOpenPost ? (
        <>
          <Header setEdit={setEdit} />
          <div className="post-container">
            <Posts />
          </div>
          <Footer isOpenPost={isOpenPost} setOpenPost={setOpenPost} />
        </>
      ) : (
        <>
        <Header setEdit={setEdit} />
        <MakePost setOpenPost={setOpenPost} />
        </>
      )}
      {pending && <p className="loading">loading</p>}
      {!isEdit && error && <p className="error">Error when get data</p>}
    </div>
  );
}

export default App;
