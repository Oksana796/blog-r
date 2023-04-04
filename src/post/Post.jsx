import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/2911521/pexels-photo-2911521.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt=""
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCateg">Music</span>
          <span className="postCateg">Life</span>
        </div>
        <span className="postTitle">Lorem, ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescr">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.
      </p>
    </div>
  );
};

export default Post;
