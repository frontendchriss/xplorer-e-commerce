import { Link } from "react-router-dom";
import Arrowrighticon from "../../assets/icons/arrowrighticon";

const Intro = () => {
  return (
    <div className="justify-center text-center">
      <h2 className="text-8xl">Shop everything you need</h2>
      <p className="text-7xl ml-12 m-4">online from the Xplorer</p>
      <p className="text-5xl ml-16">
        businesses <span className="text-blue-800">you love</span>
      </p>
      <p className="text-slate-400 p-4 text-base m-2">
        And for a limited time only..
      </p>
      <div className="flex items-center justify-center">
        <div className="text-center">
          <Link
            to="/registration"
            className="text-2xl font-medium mt-1 text-white uiblue p-3 rounded-full"
          >
            Join Xplorer for Free <Arrowrighticon />
          </Link>
          <p className="p-2 m-2 font-medium underline">Shop all products</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
