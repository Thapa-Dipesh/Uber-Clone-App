import React from "react";

const LocationSearchPanel = (props) => {
  // sample array for location
  const locations = [
    "Los Angeles, CA 90001",
    "Dos Dngeles, DA 90001",
    "Jos Jngeles, AJ 90001",
    "Kos Kngeles, AC 90001",
    "Aos Lngeles, AL 90001",
  ];

  return (
    <div>
      {locations.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanelOpen(true);
              props.setPanelOpen(false);
            }}
            className="flex items-center justify-start my-2 border-2 border-gray-50 active:border-black p-2 rounded-xl gap-4"
          >
            <h2 className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
