import React, { useContext, useState } from "react";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import { AuthContext } from "../../context/authContext/AuthContext";
import app from "../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import axios from "axios";
import "./blogCreateCon.scss";

function BlogCreateCon() {
  const { user } = useContext(AuthContext);
  console.log(user);

  //Create a blog
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [timeRead, setTimeRead] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + "-" + file?.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          try {
            const res = axios.post("/blogs/create", {
              title,
              desc,
              timeRead,
              location,
              userID: user._id,
              authorName: user.username,
              category,
              img: downloadURL,
            });
            window.location.replace("/blogs");
            console.log(res.data);
          } catch (error) {
            console.log(error);
          }
        });
      }
    );
  };

  return (
    <div className="blogCreateContainer">
      <form className="bccWholeContainer" onSubmit={handleSubmit}>
        <span className="bccTitle">
          Share Ideas And Experiences through Blog !
        </span>
        <hr className="bccHr" />
        <img src="/assets/cover.jpeg" alt="" className="bccImg" />

        <label className="bccImgIconAndTxt" htmlFor="fileInput">
          <ImageSearchOutlinedIcon className="bccImgIcon" />
          <span className="bccSelectImgTxt">Select Image</span>
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: " none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <div className="bccColumnCon">
          <span className="bccBlogTitle  bccBlogTitle1 ">Blog Title</span>
          <input
            type="text"
            className="bccBlogTitleInput  bccBlogTitleInput1"
            onChange={(e) => setTitle(e.target.value)}
          />
          <span className="bccBlogDesc bccBlogTitle1">Blog Description</span>
          <textarea
            type="text"
            className="bccBlogDescInput bEBlogTitleInput1"
            onChange={(e) => setDesc(e.target.value)}
          />
          <label className="bccBlogCategory bccBlogTitle1">Location</label>
          <input
            type="text"
            className="bccBlogCategoryInput bccBlogTitleInput1"
            onChange={(e) => setLocation(e.target.value)}
          />
          <label className="bccBlogCategory bccBlogTitle1">Author</label>
          <input
            type="text"
            className="bccBlogCategoryInput bccBlogTitleInput1"
            value={user.username}
          />
          {/* == */}
          <span className="  bccBlogTitle1">Category</span>{" "}
          <select
            className="bccBlogTitleInput1"
            onChange={(e) => setCategory(e.target.value)}
            name="contractType"
          >
            <option disabled selected={true}>
              Select
            </option>
            <option value="programming">Programming</option>
            <option value="dataScience">Data science</option>
            <option value="cloudComputing">Cloud Computing</option>
            <option value="machineLearning">Machine Learning</option>
            <option value="webDevelopment">Web Development</option>
            <option value="techNews">Tech News</option>
          </select>
          {/* == */}
          <label className="bccBlogTimeRead bccBlogTitle1">
            Time to Read (in minute)
          </label>
          <input
            type="number"
            min={1}
            max={60}
            className="bccBlogTimeReadInput bccBlogTitleInput1"
            onChange={(e) => setTimeRead(e.target.value)}
          />
          <button className="bccSubmmitBut" type="submit">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default BlogCreateCon;
