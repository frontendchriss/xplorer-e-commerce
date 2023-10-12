import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { DotLoader } from "react-spinners";
import Profileicon from "../assets/icons/profileicon";
import Emailicon from "../assets/icons/emailicon";
import Usericon from "../assets/icons/usericon";
import Passwordicon from "../assets/icons/passwordicon";

const Registration = () => {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loading, setloading] = useState(false);

  const validateForm = () => {
    // Define regex patterns for validation
    const nameRegex = /^[a-zA-Z ]+$/; // Only letters and spaces
    const emailRegex = /\S+@\S+\.\S+/; // Simple email format check
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/; // At least one uppercase, lowercase, number, special character, and 8 characters long

    // Check each input field against the regex patterns
    const isFirstNameValid = nameRegex.test(firstname);
    const isLastNameValid = nameRegex.test(lastname);
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);

    return (
      isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid
    );
  };

  const registerUser = async () => {
    if (!validateForm()) {
      alert("Invalid Inputs, fill in the correct data");
      return;
    }
    setloading(true);
    const response = await axios.post(
      "https://localhost:7114/api/User/Register",
      {
        first_Name: firstname,
        last_Name: lastname,
        user_Name: username,
        email: email,
        password: password,
      }
    );
    await axios.post(
      `https://localhost:7114/api/User/SendVerificationCode?email=${email}`
    );
    if (response.status === 200) {
      setloading(false);
      const sixDigit = response.data.verificationCode;
      const firstSixDigits = sixDigit.substring(0, 6);
      const confirmdata = {
        firstSixDigits,
        email,
      };
      localStorage.setItem("loginToken", JSON.stringify(confirmdata));
      // alert(response?.data?.statuss);

      Swal.fire({
        icon: "success",
        title: "successful",
        text: "Registration Successful",
        timerProgressBar: true,
        showConfirmButton: false,
        timer: 1000,
      });
      // <Navigate to="/checkmail" />;
      navigate("/checkmail");
    }
  };

  return (
    <div className="min-w-screen min-h-screen bgtransparent flex items-center justify-center px-5 py-5">
      {loading === true ? (
        <div className="flex justify-center items-center h-66">
          <DotLoader color="#06bbcc" size={50} />
        </div>
      ) : (
        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 py-10 px-10">
              <img
                src="https://images.unsplash.com/photo-1696321832508-ba1e671f4406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="landscape"
                className="rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                <p>Enter valid information to register</p>
              </div>
              <div>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5 relative">
                    <label for="" className="text-xs font-semibold px-1">
                      First name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="John"
                        required
                        value={firstname}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="absolute top-3 left-2 pl-3 flex items-center h-full">
                      <Profileicon />
                    </div>
                  </div>
                  <div className="w-1/2 px-3 mb-5 relative">
                    <label for="" className="text-xs font-semibold px-1">
                      Last name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Smith"
                        required
                        value={lastname}
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                      <div className="absolute top-3 left-2 pl-3 flex items-center h-full">
                        <Profileicon />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5 relative">
                    <label for="" className="text-xs font-semibold px-1">
                      Username
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                        required
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                      <div className="absolute top-3 left-2 pl-3 flex items-center h-full">
                        <Usericon />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5 relative">
                    <label for="" className="text-xs font-semibold px-1">
                      Email
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <div className="absolute top-3 left-2 pl-3 flex items-center h-full">
                        <Emailicon />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12 relative">
                    <label for="" className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="*******"
                        required
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      <div className="absolute top-3 left-2 pl-3 flex items-center h-full">
                        <Passwordicon />
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/login">
                  <h2 className="text-right p-2 text-gray-500 hover:text-indigo-300 mb-1">
                    Already have an account ?
                  </h2>
                </Link>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      // to="/checkmail"
                      onClick={registerUser}
                      className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white text-center rounded-lg px-3 py-3 font-semibold"
                    >
                      REGISTER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
