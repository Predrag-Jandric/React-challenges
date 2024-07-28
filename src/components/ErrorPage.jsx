// import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import errorImage from "../assets/error.svg";

function ErrorPage() {
  // const error = useRouteError();
  // console.error(error)

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <img className="w-72 mb-8" src={errorImage} alt="a person wondering" />
      <p className="text-2xl text-gray-500 text-center mb-8">
        Looks like you got lost...
      </p>
      <Link
        className="rounded-full px-5 py-4 bg-react text-btn-color text-lg font-bold hover:bg-react-hover transition"
        to="/"
      >
        Go back
      </Link>
    </div>
  );
}

export default ErrorPage;
