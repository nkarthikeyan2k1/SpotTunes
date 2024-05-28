import { Navigate, Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <header>
        <div>
          <Link to="for-you">for-you</Link>
        </div>
        <div>
          <Link to="top-tracks">top-tracks</Link>
        </div>
        <div>
          <Link to="favourites">favourites</Link>
        </div>
        <div>
          <Link to="recentlt-played">recentlt-played</Link>
        </div>
      </header>
    </>
  );
};
export default Sidebar;
