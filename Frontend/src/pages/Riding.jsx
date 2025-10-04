import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to={"/home"}
        className="h-10 w-10 fixed right-2 top-2 bg-gray-400 flex items-center justify-center rounded-full"
      >
        <i className="ri-home-5-line text-lg font-medium"></i>
      </Link>

      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
        />
      </div>

      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-16"
            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MDM0YzIwMC1jZTI5LTQ5ZjEtYmYzNS1lOWQyNTBlODIxN2EucG5n"
            alt="uber-car-image"
          />

          <div className="text-right">
            <h2 className="text-lg font-medium">Driver</h2>
            <h4 className="text-xl font-semibold -mt-2">Ga 22 Pa 2255</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center gap-2">
          <div className="w-full mt-5">
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

        <button className="w-full mt-5 bg-green-600 text-white text-lg font-semibold p-2 rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
