// import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import errorImage from "../assets/error.svg"

function ErrorPage() {
  // const error = useRouteError();
  // console.error(error)
  return (
    <div>
      <img src={errorImage} alt="" />
      <p>Looks like you got lost</p>
      <Link className="btn" to="panel">Go back</ Link>
    </div>
  );
}

export default ErrorPage;
