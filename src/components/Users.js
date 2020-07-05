import React from "react";
import UserItem from "../components/UserItem";
import Spinner from "../layout/Spinner";

const Users = (props) => {
  const { loading, users } = props.data;
  return (
    <div style={userStyle}>
      {!loading ? (
        users.map((user) => <UserItem key={user.id} user={user} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};
export default Users;
