import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full bg-black text-white flex flex-col justify-center items-center px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
