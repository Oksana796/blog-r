import "./write.css";

const Write = () => {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/15379/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label className="writeFormLabel" htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-folder-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            className="writeInput"
            placeholder="Title"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
