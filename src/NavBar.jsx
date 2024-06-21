import UserCard from "./UserCard";
import "./App.css";

function NavBar(props) {
  return (
    <>
      <div id="Nav-bar">
        <h3>TODO APP</h3>
        <UserCard username={props.username}></UserCard>
      </div>
    </>
  );
}

export default NavBar;
