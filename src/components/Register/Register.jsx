import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showpassword, setShowpassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log("Registation Submit");
    console.log(email, password, accepted);

    //reset error
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!accepted) {
      setRegisterError("Please accept our terms and conditions.");
      return;
    }

    //create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("User Registation Successful.");
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-[80vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registration now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="">
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
                  type={showpassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <div className="absolute top-[170px] ml-72">
                  <span
                    className="relative"
                    onClick={() => setShowpassword(!showpassword)}
                  >
                    {showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                <div className="flex items-center gap-20">
                  <div className=" text-[12px] space-x-2 mr-2 mt-4">
                    <input
                      className=""
                      type="checkbox"
                      name="terms"
                      id="terms"
                    />
                    <label className="" htmlFor="terms">
                      Accepts Your Terms and condition
                    </label>
                  </div>
                </div>
              </div>

              <div className=""></div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="text-[12px] underline">
                <Link to="/login">Already have an account? Please Login </Link>
              </div>
            </form>
            {registerError && (
              <p className="text-red-600 font-bold font-serif">
                {registerError}
              </p>
            )}
            {success && <p className="text-green-600">{success}</p>}
          </div>
        </div>
      </div>

      {/* <div className="hero min-h-[80vh] bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="h-80">
        <div className="">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered mr-10" required />
        </div>
        <div className="relative mr-10 ">
          <div>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
        <input type={showpassword ? "text" : "password"}
           name="password" 
           placeholder="password" 
           className="input input-bordered"
            required /> 
            <span className="absolute top-[39%] -ml-7" onClick={()=> setShowpassword(!showpassword)}>

              {
                showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
              }
            </span>
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
         <div className="">
         <input className="" type="checkbox" name="terms" id="terms" />
          <label className="ml-2 text-xs" htmlFor="terms">Accepts Your Terms and condition</label>
         </div>
        </div>
        <div className=" mt-3">
          <button className="btn btn-primary w-56 mr-8">Registation</button>
        </div>
      </form>
      {
        registerError && <p className="text-red-600 font-bold font-serif">{registerError}</p>
      }
      {
        success && <p className="text-green-600">{success}</p>
      }
    </div>
  </div>
</div> */}
    </div>
  );
};

export default Register;
