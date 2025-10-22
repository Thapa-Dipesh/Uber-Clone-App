import React from "react";

const ConfirmRidePopUp = ({ setRidePopupPanel, setConfirmRidePopupPanel }) => {
  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <h3 className="text-2xl font-semibold ">Confirm this ride to start</h3>
        <h5
          onClick={() => {
            setRidePopupPanel(false);
          }}
          className="text-2xl text-gray-400"
        >
          <i className="ri-arrow-down-wide-line"></i>
        </h5>
      </div>

      <div className="flex items-center justify-between mt-3 p-3 bg-yellow-400 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xTwVADgFe4Vz1XzuMukOEKLXGcaanosc8Q&s"
            alt="driver-image"
          />
          <h2 className="text-lg font-medium">Captain Name</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="flex flex-col justify-between items-center gap-2">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">CA 90001</h3>
              <p className="text-sm -mt-1 text-gray-600">Los Angeles,USA</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">CA 90001</h3>
              <p className="text-sm -mt-1 text-gray-600">Los Angeles,USA</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">&#8377;191</h3>
              <p className="text-sm -mt-1 text-gray-600">Los Angeles,USA</p>
            </div>
          </div>
        </div>

        <button className="w-full mt-5 bg-green-600 text-white text-lg font-semibold p-2 rounded-lg">
          Confirm
        </button>

        <button
          className="w-full mt-1 bg-red-500 text-white text-lg font-semibold p-2 rounded-lg"
          onClick={() => {
            setRidePopupPanel(false);
          }}
        >
          Cancle
        </button>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
