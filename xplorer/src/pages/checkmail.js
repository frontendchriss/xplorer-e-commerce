import React from "react";
import { Link } from "react-router-dom";

const Checkmail = () => {
  return (
    <div>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
        <div className="max-w-xl px-5 text-center">
          <h2 className="mb-2 text-[42px] font-bold text-zinc-800">
            Check Mail
          </h2>
          <p className="mb-2 text-lg text-zinc-500">
            A verification code was sent to
            <span className="font-medium text-indigo-500">
              mail@exapmle.com
            </span>
          </p>
          <Link
            to="/verifyemail"
            className="mt-3 inline-block w-96 rounded bg-indigo-600 px-5 py-3 font-medium text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700"
          >
            Gotten The Code ?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkmail;
