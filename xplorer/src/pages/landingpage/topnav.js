import Carticon from "../../assets/icons/carticon";
import Notificationicon from "../../assets/icons/notificationicon";
import Dollarsignicon from "../../assets/icons/dollarsignicon";
import Searchinput from "../../components/searchinput";
import { useState } from "react";
import Cartmodal from "../../pages/cart/cartmodal";

const Topnav = () => {
  const [search, setSearch] = useState("");
  const [openCartModal, setOpenCartModal] = useState(false);
  return (
    <div className="flex items-center p-2 justify-around h-20">
      <div>
        <h2 className="text-4xl">Xplorer</h2>
      </div>
      <div className="w-4/5">
        <Searchinput search={search} setSearch={setSearch} />
      </div>
      <div className="flex items-center">
        <Notificationicon />
        <div className="flex items-center m-3 border-black p-2">
          <Dollarsignicon />
          <h3 className="text-lg"> 300 </h3>
        </div>
        <div
          onClick={() => {
            setOpenCartModal(true);
          }}
        >
          <Carticon />
        </div>
      </div>
      {openCartModal && <Cartmodal closeModal={setOpenCartModal} />}
    </div>
  );
};

export default Topnav;
