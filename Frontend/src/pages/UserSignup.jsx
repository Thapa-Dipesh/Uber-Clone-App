import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className=" h-screen p-7 flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-10 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}>
          <h3 className="text-lg font-medium mb-2">What's your name?</h3>
          <div className="flex gap-3 mb-5">
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="Enter First Name"
              gap-4
            />
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Enter Last Name"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            className="bg-[#eeeeee] rounded mb-5 px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] rounded mb-5 px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />

          <button className="bg-[#111111] text-white font-semibold rounded mb-4 px-4 py-2 w-full text-lg placeholder:text-base">
            Signup
          </button>
        </form>

        <p className="text-center">
          Already have an account?
          <Link to="/login" className="text-blue-600">
            Login Here
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/captain-signup"
          className="bg-yellow-600 text-white flex items-center justify-center font-semibold rounded mb-5 px-4 py-2 w-full text-lg placeholder:text-base">
          Sign up as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserSignup;
