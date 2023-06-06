import { useState } from "react";
import "./edit.css";
import Input from "../InputField/input";
import { useSelector, useDispatch } from "react-redux";

import { updateUser } from "../../redux/apiRequest";
function EditPage(props) {
    const {setEdit} = props;

  const avUrl = [
    "https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d",
    "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
  ];

  const user = useSelector((state) => state.user)
  const dispacth = useDispatch()

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState(user.themeColor);
  const [url, setUrl] = useState(user.avaUrl );

  function handleSubmit(e) {
    e.preventDefault();
    setEdit(false)
    const updateUsers = {
      name: name,
      age: age,
      about: about,
      avaUrl: url,
      themeColor: theme
    }

    updateUser(updateUsers, dispacth)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="edit-container">
          <button className="close" >Save</button>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <Input label="Display name" data= {user.name} setData={setName}/>
            <Input label= "Age" data = {user.age} setData={(setAge)} />
            <Input label= "About" data = {user.about} setData={(setAbout)} inputType= "textarea" classStyle="input-about"/>
            <label>Profile picture</label>
            <div className="input-image-container">
              {avUrl.map((url) => (
                <img onClick={e => setUrl(e.target.src)} className="input-image" src={url} alt="" />
              ))}
            </div>
            <div className="theme-container">
              <label>Theme</label>
              <input type="color" className="theme-color" onChange={e=> setTheme(e.target.value)}/>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}

export default EditPage;
