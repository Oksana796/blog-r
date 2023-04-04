import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/345522/pexels-photo-345522.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Oksana</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescr">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
          sapien nunc, vitae scelerisque nisl. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec vitae sapien nunc, vitae
          scelerisque nisl.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec vitae sapien nunc, vitae scelerisque nisl.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Donec vitae sapien nunc,
          vitae scelerisque nisl.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec vitae sapien nunc, vitae scelerisque nisl.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien
          nunc, vitae scelerisque nisl.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec vitae sapien nunc, vitae scelerisque nisl.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien
          nunc, vitae scelerisque nisl.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
