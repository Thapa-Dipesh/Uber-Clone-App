import React from "react";

const LookingForDriver = ({ setVehicleFound }) => {
  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <h3 className="text-2xl font-semibold ">Looking For a Driver</h3>
        <h5
          onClick={() => {
            setVehicleFound(false);
          }}
          className="text-2xl text-gray-400"
        >
          <i className="ri-arrow-down-wide-line"></i>
        </h5>
      </div>

      <div className="flex flex-col justify-between items-center gap-2">
        <img
          className="h-32"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MDM0YzIwMC1jZTI5LTQ5ZjEtYmYzNS1lOWQyNTBlODIxN2EucG5n"
          alt="uber-car-image"
        />

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
      </div>
    </div>
  );
};

export default LookingForDriver;
