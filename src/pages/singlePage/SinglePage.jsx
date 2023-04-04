import "./singlePage.css";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import SinglePost from  "../../components/singlePost/SinglePost.jsx";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default SinglePage;
