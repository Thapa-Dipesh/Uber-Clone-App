import React from "react";

const CaptainsDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xTwVADgFe4Vz1XzuMukOEKLXGcaanosc8Q&s"
            alt="driver-image"
          />
          <h4 className="font-medium text-lg">Captain</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">&#8377;191.4</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>

      <div className="flex justify-center items-start gap-4 p-3 mt-6 bg-gray-100 rounded-xl">
        <div className="text-center ">
          <i className="ri-timer-2-line mb-2 text-3xl font-thin"></i>
          <h5 className="text-lg font-medium">10.5</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>

        <div className="text-center ">
          <i className="ri-speed-up-line mb-2 text-3xl font-thin"></i>
          <h5 className="text-lg font-medium">10.5</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>

        <div className="text-center ">
          <i className="ri-booklet-line mb-2 text-3xl font-thin"></i>
          <h5 className="text-lg font-medium">10.5</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainsDetails;
