import { Link } from "react-router-dom";
import CaptainsDetails from "../components/CaptainsDetails";

const CaptainHome = () => {
  return (
    <div className="h-screen">
      <div className=" fixed top-0 p-6 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber img"
        />
        <Link
          to={"/home"}
          className="h-10 w-10 bg-gray-400 flex items-center justify-center rounded-full"
        >
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>

      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
        />
      </div>

      <div className="h-2/5 p-6">
        <CaptainsDetails />
      </div>
    </div>
  );
};

export default CaptainHome;
