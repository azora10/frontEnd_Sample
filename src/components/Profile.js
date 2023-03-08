import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Profile.scss";

const Profile = (props) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userVal = localStorage.getItem("user");
    console.log(userVal);
    if (userVal) {
      const userDataObj = JSON.parse(userVal); // parse response data from localStorage
      setUserData(userDataObj);
    }
  }, []);

  return (
    <div className="profile">
      {userData ? (
        <div className="card col-md-4">
          <div className="card-header">
            <img
              src={`http://localhost:7070/public/${userData.image}`}
              alt="img"
            />
          </div>
          <div className="card-body">
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Place: {userData.place}</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">
              <Link to={"/"} className="link">Home</Link>
            </button>
          </div>
        </div>
      ) : (
        <p>No user data found</p>
      )}
    </div>
  );
};

export default Profile;
