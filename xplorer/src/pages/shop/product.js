import Favoriteicon from "../../assets/icons/favoriteicon";
import Addtocart from "../../assets/icons/addtocarticon";

const Product = ({ product }) => {
  const { product_Image, product_brand, product_Name, product_Price } = product;
  debugger;
  return (
    <div className="relative border rounded-lg shadow-md overflow-hidden w-80">
      <div className="absolute top-2 left-2">
        <Favoriteicon />
      </div>
      <img src={product_Image} alt="product images" />
      <div className="p-4 text-left">
        <h3 className="text-xl">{product_Name}</h3>
        <h4>{product_brand}</h4>
        <p className="text-gray-600">{product_Price}</p>
      </div>
      <div className="absolute bottom-2 right-2">
        <Addtocart />
      </div>
    </div>
  );
};

export default Product;
