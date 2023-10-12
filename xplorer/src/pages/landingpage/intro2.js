import Arrowrighticon from "../../assets/icons/arrowrighticon";

const Intro2 = () => {
  return (
    <div className="flex justify-between mx-32">
      <div className="h-64 w-96 border  rounded-3xl bg-blue-700">
        <div className="text-left text-white mt-8 p-3">
          <h3 className="text-4xl "> +15k</h3>
          <p className="tracking-wide text-2xl ml-2">Products Reviews</p>
        </div>
        <div className="text-left text-white ml-2">
          <p className="p-2 text-2xl tracking-wides">
            Real Identity - <p>verified reviews</p>
            <p>you can trust</p>
          </p>
        </div>
      </div>
      <div className="h-48 w-64 border  rounded-3xl mt-auto bg-gray-300"></div>
      <div className="h-48 w-64 border  rounded-3xl mt-auto bg-gray-300"></div>
      <div className="h-64 w-96 border  rounded-3xl bg-blue-700">
        <div className="text-2xl text-white p-3 text-left">
          <h3 className="">Shop with ease on Xplorers</h3>
          <span>wide variety of products</span>
          <p>from Top Rated Brands like Nike, Etsy </p>
          <hr className="mt-16" />
          <div className="flex justify-between items-center">
            <p>Learn more</p>
            <Arrowrighticon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro2;
