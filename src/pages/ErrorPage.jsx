import { Link, useRouteError } from "react-router-dom";
import err from '../assets/assets/404.png'
import errgif from '../assets/assets/fcae22bbd51c347a7af3a2d9072754ae.gif'
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#202020] text-white">
        {/* Background effect */}
        <div className="absolute inset-0 z-0">
          <img
            src={err}
            alt="404 Background"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl block md:hidden font-bold text-gray-700 animate-pulse">
            {error.status}
          </h1>
          <p className="mt-4 text-2xl block md:hidden font-semibold text-gray-500">
            Oops! You’ve reached the end credits.
          </p>
          {/* <p className="mt-2 text-gray-400">
            {error.statusText || error.message}
          </p> */}

          {/* Action buttons */}
          <div className="mt-6 space-x-4">
            <Link to="/">
              <button className="btn border-none bg-[#D72638] hover:bg-[#FF5733] text-white px-6 py-2 rounded-lg transition-all duration-300">
                Back to Home
              </button>
            </Link>
          </div>
        </div>

        {/* Animation */}
        <div className="absolute bottom-10">
          <p className="text-gray-500 text-sm animate-bounce">
            "Keep calm and enjoy the movies!"
          </p>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
