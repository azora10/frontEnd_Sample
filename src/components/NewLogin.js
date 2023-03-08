import React, { useEffect, useState } from "react";
import "../styles/NewLog.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewLogin = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [profile, setProfile] = useState(null);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    place: "",
    image: "",
  });

  const navigate = useNavigate();

  const [userLog, setUserLog] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (profile !== null) {
      localStorage.setItem("user", JSON.stringify(profile));
      navigate("/profile");
    }
  }, [profile, navigate]);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      setUser({
        ...user,
        image: e.target.files[0],
      });
    } else {
      setUser({
        ...user,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    var formData = new FormData();
    for (const [key, value] of Object.entries(user)) {
      formData.append(key, value);
    }
    axios
      .post("http://localhost:7070/createUser", formData, config)
      .then((res) => {
        console.log(res.data);
      });
    window.location.href = "/";
  };

  const handleInputChangeLog = (e) => {
    const { name, value } = e.target;
    setUserLog({
      ...userLog,
      [name]: value,
    });
  };

  const handleSubmitLog = (e) => {
    e.preventDefault();
    console.log(userLog);
    axios.post("http://localhost:7070/loginUser", userLog).then((res) => {
      setProfile(res.data.data);
    });
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className="sss">
      <div
        class={isSignUp ? "container right-panel-active" : "container"}
        id="container"
      >
        <div class="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <input
              className="form-control"
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleInputChange}
              required
            />
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              required
            />
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              required
            />
            <input
              className="form-control"
              type="text"
              placeholder="City"
              name="place"
              onChange={handleInputChange}
              required
            />
            <div class="form-group mt-2">
              <label for="image">Upload Image:</label>
              <input
                type="file"
                class="form-control-file"
                id="image"
                name="image"
                onChange={handleInputChange}
                required
              />
            </div>
            <button onClick={handleSubmit}>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInputChangeLog}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChangeLog}
              required
            />
            <a>Forgot your password?</a>
            <button onClick={handleSubmitLog}>Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button class="ghost" id="signIn" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>New User</h1>
              <p>Create new account. Click here!</p>
              <button class="ghost" id="signUp" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLogin;
