import React from "react";
import "./userList.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser } from "../features/userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersInfo.users);
  const handleRemoveUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="">
      <div>
        <Link to="/add-user">
          <Button>Add User</Button>
        </Link>
      </div>

      {users.length ? (
        users.map((user, index) => {
          return (
            <div key={index} className="userList">
              <p>
                <span>so.</span> {index + 1}
              </p>
              <p>
                <span>user name:</span> {user.name}
              </p>
              <p>
                <span>user email:</span> {user.email}
              </p>
              <p>
                <span>user phone:</span> {user.phoneNumber}
              </p>
              <p>
                <span>user aadhar number:</span> {user.aadharNumber}
              </p>
              <p>
                <span>user address:</span> {user.address}
              </p>
              <p>
                <span>user check</span> {user.checkInDate}
              </p>
              <p>
                <span>user stay days:</span> {user.stayDays}
              </p>
              <Link to={`edit-user/${user.id}`}>
                <button>edit</button>
              </Link>
              <button onClick={() => handleRemoveUser(user.id)}>delete</button>
              <hr />
            </div>
          );
        })
      ) : (
        <div>
          <p style={{color: "red", display: "flex", justifyContent:"center"}}>No User</p>
        </div>
      )}
    </div>
  );
};

export default UserList;
