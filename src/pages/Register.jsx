import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import UseTitle from "../components/UseTitle";

const Register = () => {
  const { creatNewUser, setUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();
  const [error, setError] = useState("");
  UseTitle("Register");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log({ name, photo, email, password });
    setError("");
    if (password.length < 6) {
      setError("Password should be 6 characters or longer");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password should be at least one uppercase, one lowercase value"
      );
      return;
    }

    creatNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className=" min-h-screen flex justify-center items-center pt-16">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>

        <form onSubmit={handleSubmit} className="card-body">
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          {/* photo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            {/* password */}
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#D72638] text-white">Register</button>
          </div>
        </form>
        {error && (
          <span className="text-sm text-red-600 text-center">{error}</span>
        )}
        <p className="text-center font-semibold text-blue-900">
          Already Have An Account ?{" "}
          <Link className="text-red-500" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
