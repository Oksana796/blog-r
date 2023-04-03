import "./topbar.css";

const Topbar = () => {
  return (
    <div className="top">
      <div className="topleft">
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
      </div>
      <div className="topcenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topright">
        <img
          className="topImg"
          src="https://images.pexels.com/photos/9408954/pexels-photo-9408954.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
