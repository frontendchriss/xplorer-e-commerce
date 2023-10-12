import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Emailicon from "../assets/icons/emailicon";
import axios from "axios";
import { useEffect } from "react";
import { DotLoader } from "react-spinners";
import Swal from "sweetalert2";

const Verifyemail = () => {
  const navigate = useNavigate();
  const [verifyEmailToken, setVerifyEmailToken] = useState();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    console.log(verifyEmailToken);
  }, []);
  console.log(verifyEmailToken);
  const verifyToken = async () => {
    setloading(true);
    debugger;
    try {
      const token = localStorage.getItem("loginToken");
      const parsedData = JSON.parse(token);
      const emails = parsedData.email;
      console.log(emails);

      const response = await axios.post(
        "https://localhost:7114/api/User/ConfirmEmailRequest",
        {
          email: emails,
          token: verifyEmailToken,
        }
      );
      if (response.status === 200) {
        setloading(false);
        Swal.fire({
          icon: "success",
          title: "successful",
          text: "Registration Successful",
          timerProgressBar: true,
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/login");
      }
    } catch (error) {
      Swal.fire(error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center flex-col mt-5">
        {loading === true ? (
          <div className="flex justify-center items-center h-66">
            <DotLoader color="#06bbcc" size={50} />
          </div>
        ) : (
          <section className="max-w-2xl mx-auto bg-white">
            <div className="h-[200px] prtransparent w-full text-black flex items-center justify-center flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-[1px] bg-white"></div>
                <Emailicon />
                <div className="w-10 h-[1px] bg-white"></div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-xl sm:text-3xl tracking-wider font-bold capitalize">
                  Verify E-mail Address
                </div>
              </div>
            </div>
            <main className="mt-8 px-5 sm:px-10">
              <h2 className="text-gray-700 ">Hello John Deo,</h2>
              <p className="mt-2 leading-loose text-gray-600 ">
                A One Time Password was sent to your mail
              </p>
              <div>
                <input
                  type="text"
                  className="w-80 p-3 m-3 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  value={verifyEmailToken}
                  onChange={(e) => setVerifyEmailToken(e.target.value)}
                />
              </div>
              <p className="mt-4 leading-loose text-gray-600">
                This passcode will only be valid for the next
                <span className="font-bold"> 2 minutes</span>.
              </p>
              <button
                onClick={verifyToken}
                className="px-6 py-2 mt-6 text-sm font-bold tracking-wider text-white capitalize transition-colors duration-300 transform prblue rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80"
              >
                Verify email
              </button>
              <p className="mt-8 text-gray-600">
                Thank you for Signing up with us <br />
              </p>
            </main>
            <p className="text-gray-500  px-5 sm:px-10 mt-8">
              This email was sent from
              <p
                className="text-[#365CCE] hover:underline"
                alt="sales@infynno.com"
                target="_blank"
              >
                info@xplorer.com
              </p>
            </p>
            <footer className="mt-8">
              <div className="prtransparent py-5 text-black text-center">
                <p className="mt-3 ">
                  © {new Date().getFullYear()} Xplorer All Rights Reserved.
                </p>
              </div>
            </footer>
          </section>
        )}
      </div>
    </div>
  );
};

export default Verifyemail;
