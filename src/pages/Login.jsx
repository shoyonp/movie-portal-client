import { useContext, useRef, useState } from "react";
import { auth, AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";
import { sendPasswordResetEmail, signInWithPopup } from "firebase/auth";

const Login = () => {
  const { userLogin, setUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.message });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleLogin())
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        // console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("please provide an valid email");
      // console.log("valid email");
    } else {
      sendPasswordResetEmail(auth, email).then(() => {
        alert("Password reset email sent, please check your email ");
      });
    }
  };

  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              ref={emailRef}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {error.login && (
              <label className="label text-sm text-red-600">
                {error.login}
              </label>
            )}
            <label onClick={handleForgetPassword} className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green-600 text-white ">Login</button>
          </div>
        </form>
        <h2 className="font-bold text-lg  divider text-center">Or</h2>
        <div className="mb-3 mx-auto">
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-none text-green-700 "
          >
            {/* <FcGoogle className="text-black"></FcGoogle> Login With Google */}
            Login With Google
          </button>
        </div>

        <p className="text-center font-semibold">
          Dont't Have An Account ?{" "}
          <Link className="text-green-600" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
