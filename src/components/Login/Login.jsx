import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    //Error reset
    setSuccess("");
    setError("");

    //Create User
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("Login Successful!!");
      })
      .catch((error) => {
        console.log(error);
        setError("envalid your email or password");
      });
  };
  return (
    <div className="hero min-h-[80vh] bg-base-200 rounded">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="h-72">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="text-[12px] underline">
              <Link to="/register">Dont have an account? Please Registrer </Link>
            </div>
          </form>
          {success && (
            <p className="text-green-700 font-serif font-semibold">{success}</p>
          )}
          {error && (
            <p className="text-red-700 font-serif font-semibold">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
