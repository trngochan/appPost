import "./footer.css";

function Footer(props) {
  const { isOpenPost, setOpenPost } = props;
  return (
    <footer>
      <div className="footer-title" onClick={(e) => setOpenPost(!isOpenPost)}>
        {isOpenPost ? <>-</> : <>+</>}
      </div>
    </footer>
  );
}

export default Footer;
