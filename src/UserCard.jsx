import "./App.css";
function UserCard(props) {
  return (
    <>
      <div id="UserCard">
        <img src="./profile.png" alt="" />
        <h3>{props.username}</h3>
      </div>
    </>
  );
}
export default UserCard;
