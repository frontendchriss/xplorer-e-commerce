import Cancel from "../../assets/icons/cancelicon";
import Checkout from "../../components/buttons/checkout";

const Cartmodal = ({ closeModal }) => {
  return (
    <div className="modalbackground h-screen w-screen fixed flex justify-center inset-0 items-center overflow-auto md-backgroundcolor">
      <div className="modalcontainer h-3/6 flex flex-col p-6 bg-white p-4 shadow-lg rounded-lg w-11/12 ">
        <button onClick={() => closeModal(false)} className="justify-end flex">
          <Cancel />
        </button>
        <div className="title mt-2.5 m-2 text-center text-3xl">Cart</div>
        <hr />
        <div className="cart-items"></div>
        <div className="actions flex items-center justify-center mt-auto ">
          <button
            onClick={() => closeModal(false)}
            className="p-3 m-2 rounded-lg border bg-black text-white"
          >
            Continue Shopping
          </button>
          <>
            <Checkout />
          </>
        </div>
      </div>
    </div>
  );
};

export default Cartmodal;
