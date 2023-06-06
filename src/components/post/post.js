import { useSelector } from "react-redux";
import "./post.css";

function Posts() {
  const posts = useSelector((state) => state.post.posts);
  const tags = ["None", "NSFW", "Mood", "Quotes"];

  return (
    <>
      <section className="post-container">
        {posts.slice(1).map((post, i) => {
          return (
            <div key={i} className="posts">
              <p className="posts-title">{post.title}</p>
              <p className={`posts-tags-${tags[post.tags]} posts-tags`}>{tags[post.tags]}</p>
              <p className="posts-desc">{post.desc}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Posts;
