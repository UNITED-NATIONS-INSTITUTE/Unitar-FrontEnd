import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setCurrentUserRole,
  setAccessToken,
  setLoggedInUserRef,
} from "../../features/user/userSlice";
import { requestToken } from "../../api/security/security";
import jwt_decode from "jwt-decode";
import BasicModal from "./SignUpModal";
const LogIn = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const openModal = () => setOpenSignUpModal(true);
  const closeModal = () => setOpenSignUpModal(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const { username, password } = values;

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  function handleHome(role) {
    if (role === "ORGANIZER") {
      navigate("/organizer");
    } else if (role === "PARTICIPANT") {
      navigate("/participant");
    } else if (role === "ADMIN") {
      navigate("/admin");
    } else {
      console.log({ error: "Invalid role" });
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    requestToken(username, password)
      .then((response) => {
        if (response.status === 200) {
          // decodes JWT to determine user role and reference
          // TO DO: SHOW SUCCESS MODAL
          setSuccessMessage("Login successful!");
          // Clear the form
          setValues({
            email: "",
            password: "",
          });

          const decodedToken = jwt_decode(response.data.accessToken);

          dispatch(setAccessToken({ accessToken: response.data.accessToken }));
          dispatch(
            setLoggedInUserRef({ loggedInUserRef: decodedToken.user_ref })
          );
          dispatch(setCurrentUserRole({ currentUserRole: decodedToken.role }));
          handleHome(decodedToken.role);
        }
      })
      .catch((err) => {
        // TO DO: SHOW ERROR MODAL
        setErrorMessage("Invalid email or password. Please try again.");
        setValues({
          username: "",
          password: "",
        });
      });
  };
  return (
    <div>
      <Navbar openModal={openModal} />
      <BasicModal openModal={openSignUpModal} handleClose={closeModal} />
      <div className="min-h-screen flex items-center justify-center bg-light-blue">
        <div className="bg-white p-8 rounded shadow-md w-100 border border-custom-blue">
          <h2 className="mb-6 font-semibold">
            Login to unitar hackathon platform
          </h2>
          {/* Display success message */}
          {successMessage && (
            <div className="mt-4 text-green-600 mb-4 border p-5 rounded border-green-600">
              {successMessage}
            </div>
          )}

          {/* Display error message */}
          {errorMessage && (
            <div className="mt-4 text-red-600 mb-4 border p-5 rounded border-red-600">
              {errorMessage}
            </div>
          )}

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-4">
              <label className="block text-md mb-2">Username</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-grey-600 rounded text-xs"
                placeholder="Pschirano"
                value={username}
                onChange={handleChange("username")}
              />
              <label className="block text-md mb-2 mt-2">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-grey-600 rounded text-xs"
                placeholder="******"
                value={password}
                onChange={handleChange("password")}
              />
              <button
                type="submit"
                className="w-full bg-custom-blue text-white py-2 mt-4 rounded hover:bg-blue-600 "
              >
                Sign me in
              </button>
              <p className="mt-5 text-md text-gray-600">
                Don't have a unitar account?
                <Link
                  onClick={() => openModal()}
                  className="text-blue-500 ml-1"
                >
                  Sign up here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
