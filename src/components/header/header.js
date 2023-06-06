import "./header.css";
import {useSelector} from 'react-redux'

function Header(props) {
  const  {setEdit} = props;
  const user = useSelector((state) => state.user)
  function handleEdit() {
    setEdit(true);
  }
  return (
    <>
      <header
        style={{
          backgroundColor: `${user.themeColor}`,
          backgroundImage:
            `linear-gradient(180deg, ${user.themeColor} 2%, ${user.themeColor}, 65%, #181818 100%)`,
        }}
      >
        <div className="infor-container">
          <div className="infor-edit" onClick={handleEdit}>Edit</div>
          <img
            className="infor-ava"
            src={user.avaUrl}
            alt=""
          />
          <div className="infor-username">{user.name}</div>
          <div className="infor-age">{user.age} years old</div>
          <div className="infor-about">{user.about}</div>
        </div>
      </header>
    </>
  );
}

export default Header;
