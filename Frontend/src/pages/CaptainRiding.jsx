import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);

  const finishRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen">
      <div className=" fixed top-0 p-6 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber img"
        />
        <Link
          to={"/captain-home"}
          className="h-10 w-10 bg-gray-400 flex items-center justify-center rounded-full"
        >
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>

      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
        />
      </div>

      {/* for captain's riding page */}
      <div
        className="h-1/5 px-6 bg-yellow-400"
        onClick={() => {
          setFinishRidePanel(true);
        }}
      >
        <h5
          onClick={() => {}}
          className="text-2xl flex items-center justify-center mb-5 text-gray-500 cursor-pointer"
        >
          <i className="ri-arrow-up-wide-line"></i>
        </h5>

        <div className="flex items-center justify-between">
          <h4 className="text-xl font-semibold">4 KM away</h4>
          <button className="bg-green-600 text-white text-lg font-semibold p-2 px-8 rounded-lg">
            Complete Ride
          </button>
        </div>
      </div>

      {/* ride popup panel */}
      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 pt-4 pb-8"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
