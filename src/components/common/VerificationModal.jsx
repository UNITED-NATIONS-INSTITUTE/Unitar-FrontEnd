import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  verifyUserAccount,
  // resendVerificationCode,
} from "../../api/security/security";

const VerificationModal = ({ user_code, onClose }) => {
  const [verificationCode, setVerificationCode] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const verifyUser = () => {
    verifyUserAccount(user_code, verificationCode)
      .then((res) => {
        if (res.status === 200) {
          setSuccessMessage(
            "Account successfully verified. Proceed to log in."
          );
          setTimeout(() => {
            onClose();
            navigate("/login");
          }, 2000);
        }
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyUser();
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="flex justify-end">
          <button onClick={onClose}>
            <img
              src="/assets/Vector (2).svg"
              alt="close"
              className="w-[20px] h-[20px]"
            />
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/amico.svg"
            className="w-[200px] h-[120px]"
            alt="logo"
          />
        </div>
        <p className="font-semibold text-sm">
          An email with a verification code has been sent to your email address.
        </p>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        {successMessage && (
          <p className="text-green-500 mt-2">{successMessage}</p>
        )}
        {!successMessage && (
          <form onSubmit={handleSubmit} className="mt-5 flex flex-col">
            <label htmlFor="verificationCode" className="text-xs mr-[10px]">
              Enter the code below to activate your account
            </label>
            <input
              className="border border-gray-600 focus:outline-none focus:border-custom-blue rounded h-[50px]"
              type="text"
              id="verificationCode"
              name="verificationCode"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-custom-blue rounded text-white w-[100px] mt-5 py-2 "
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {/* <p className="text-xs">
          Can't see the code?{" "}
          <button onClick={resendCode} className="text-custom-blue mt-5">
            Resend code
          </button>
        </p> */}
      </div>
    </div>
  );
};

export default VerificationModal;
