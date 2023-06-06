import { useState } from "react";
import Input from "../InputField/input";
import "./post.css";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";

function MakePost(props) {
  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Add some description");
  const tags = ["None", "NSFW", "Mood", "Quotes"];
  const [selectedIdx, setSelectedIdx] = useState(0);
  const dispatch = useDispatch();

  const { setOpenPost } = props;
  function handlePost() {
    setOpenPost(false);
    const newPost = {
      title: title,
      desc: desc,
      tags: selectedIdx,
    };

    dispatch(createPost(newPost));
  }
  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handlePost}>
          post
        </p>
      </div>
      <Input
        data={title}
        inputType="textarea"
        setData={setTitle}
        label="title"
        classStyle="makepost-title"
      />
      <Input
        data={desc}
        inputType="textarea"
        setData={setDesc}
        label="Description"
        classStyle="makepost-desc"
      />
      <label>Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, i) => {
          return (
            <button
              key={i}
              className={`${
                selectedIdx === i
                  ? "makepost-tags-selected"
                  : `makepost-tags-${tag}`
              }`}
              onClick={() => setSelectedIdx(i)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default MakePost;
