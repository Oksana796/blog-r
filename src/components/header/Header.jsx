import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSmall">React & Node</span>
        <span className="headerTitleLarge">Blog</span>
      </div>
      <img className='headerImg' src="https://images.pexels.com/photos/2395253/pexels-photo-2395253.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div>
  );
};

export default Header;
