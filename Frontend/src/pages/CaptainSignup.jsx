import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );
    console.log(response)

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);

      localStorage.setItem("token", data.token);
      navigate("/captain-login");
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehicleCapacity("");
    setVehiclePlate("");
    setVehicleType("");
  };

  return (
    <div className=" h-screen p-7 flex flex-col justify-between">
      <div>
        <img
          className="w-24"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">
            What's our Captain's name?
          </h3>
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

          <h3 className="text-lg font-medium mb-2">
            What's our Captain's email?
          </h3>
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

          <h3 className="text-lg font-medium mb-2"> Vehicle Information</h3>
          <div className="w-full flex gap-4 mb-7">
            <input
              type="text"
              required
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
              className="bg-[#eeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
            />

            <input
              type="text"
              required
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
              className="bg-[#eeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
            />
          </div>

          <div className="w-full flex gap-4 mb-7">
            <input
              type="text"
              required
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
              className="bg-[#eeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
            />

            <select
              required
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
              className="bg-[#eeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Moto</option>
            </select>
          </div>

          <button className="bg-[#111111] text-white font-semibold rounded mb-4 px-4 py-2 w-full text-lg placeholder:text-base">
            Signup
          </button>
        </form>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login Here
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/signup"
          className="bg-green-600 text-white flex items-center justify-center font-semibold rounded mb-5 px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign up as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainSignup;
