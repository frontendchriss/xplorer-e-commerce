import axios from "axios";
import Emailicon from "../assets/icons/emailicon";
import Passwordicon from "../assets/icons/passwordicon";
import { useState } from "react";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { DotLoader } from "react-spinners";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState();
  const [loginPassword, setloginPassword] = useState();
  const [loading, setloading] = useState(false);
  // const navigate = useNavigate();

  const loginUser = async () => {
    debugger;
    try {
      const loginData = {
        email: loginEmail,
        password: loginPassword,
      };

      // API POST REQUEST
      const response = await axios.post(
        "https://localhost:7114/api/User/login?",
        loginData
      );
      console.log(response);
      if (response.status === 200) {
        setloading(false);
        Swal.fire({
          icon: "success",
          title: "successful",
          text: "Login Successful",
          timerProgressBar: true,
          showConfirmButton: false,
          timer: 1000,
        });
        // <Navigate to="/checkmail" />;
        // navigate("/dashboard");
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-screen flex">
        {loading === true ? (
          <div className="flex justify-center items-center h-66">
            <DotLoader color="#06bbcc" size={50} />
          </div>
        ) : (
          <div className="hidden lg:flex w-full lg:w-1/2 backgroundimg justify-around items-center">
            <div
              className=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
            ></div>
            <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
              <h1 className="text-white font-bold text-6xl font-sans">
                Shop with Ease
              </h1>
              <p className="text-white mt-1 text-lg">
                Wide variety of products, only on Xplorer
              </p>
              <div className="flex justify-center lg:justify-start mt-6">
                <Link
                  to="/registration"
                  className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
          <div className="w-full px-8 md:px-32 lg:px-24">
            <form className="bg-white rounded-md shadow-2xl p-5">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">
                Hello Again!
              </h1>
              <p className="text-sm font-normal text-gray-600 mb-8">
                Welcome Back
              </p>
              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl relative">
                <input
                  id="email"
                  className=" pl-2 w-full outline-none border-none text-center"
                  type="email"
                  name="email"
                  value={loginEmail}
                  onChange={(e) => {
                    setLoginEmail(e.target.value);
                  }}
                />
                <div className="absolute top-0 left-0 pl-3 flex items-center h-full">
                  <Emailicon />
                </div>
              </div>
              <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl relative">
                <input
                  className="pl-2 w-full outline-none border-none text-center"
                  type="password"
                  name="password"
                  id="password"
                  value={loginPassword}
                  onChange={(e) => {
                    setloginPassword(e.target.value);
                  }}
                />
                <div className="absolute top-0 left-0 pl-3 flex items-center h-full">
                  <Passwordicon />
                </div>
              </div>
              <button
                onClick={loginUser}
                type="submit"
                className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              >
                Login
              </button>
              <div className="flex justify-between mt-4">
                <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                  Forgot Password ?
                </span>

                <Link
                  to="/registration"
                  className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                >
                  Don't have an account yet?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
