import React from "react";

const VehiclePanel = ({ setVehiclePanelOpen, setConfirmRidePanel }) => {
  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <h3 className="text-2xl font-semibold ">Choose a Vehicle</h3>
        <h5
          onClick={() => {
            setVehiclePanelOpen(false);
          }}
          className="text-2xl text-gray-400"
        >
          <i className="ri-arrow-down-wide-line"></i>
        </h5>
      </div>
      {/* for car */}
      <div
        onClick={() => {
          setConfirmRidePanel(true);
        }}
        className="flex w-full bg-gray-100 border-2 active:border-black rounded-xl mb-2 p-3 items-center justify-between"
      >
        <img
          className="h-12"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MDM0YzIwMC1jZTI5LTQ5ZjEtYmYzNS1lOWQyNTBlODIxN2EucG5n"
          alt="uber-car-image"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-lg flex gap-2">
            UberGo
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away </h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold text-gray-900">&#8377;191</h2>
      </div>

      {/* for bike */}
      <div
        onClick={() => {
          setConfirmRidePanel(true);
        }}
        className="flex w-full bg-gray-100 border-2 active:border-black rounded-xl mb-2 p-3 items-center justify-between"
      >
        <img
          className="h-12"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n"
          alt="uber-bike-image"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-lg flex gap-2">
            UberMoto
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away </h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold text-gray-900">&#8377;65</h2>
      </div>

      {/* for auto */}
      <div
        onClick={() => {
          setConfirmRidePanel(true);
        }}
        className="flex w-full bg-gray-100 border-2 active:border-black rounded-xl mb-2 p-3 items-center justify-between"
      >
        <img
          className="h-12"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n"
          alt="uber-car-image"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-lg flex gap-2">
            UberAuto
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away </h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold text-gray-900">&#8377;118</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
