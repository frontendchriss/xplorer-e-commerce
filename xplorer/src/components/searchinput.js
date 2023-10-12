import Searchicon from "../assets/icons/searchicon";

const Searchinput = ({ search, setSearch }) => {
  return (
    <div className="relative">
      <input
        type="text"
        className="pl-10 pr-4 py-2 border rounded-full text-gray-600 focus:outline-none w-full h-full"
        placeholder="Search products, brands, categories"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="absolute top-0 left-0 pl-3 flex items-center h-full">
        <Searchicon className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default Searchinput;
