import Sidebar from "../../components/sidebar/sidebar";
import Product from "../shop/product";
import axios from "axios";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("https://localhost:7114/api/Product")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex">
      <div className="w-1/4 h-screen">
        <Sidebar />
      </div>
      <div class="w-full pr-5">
        {/* <Product product={products} /> */}
        {
          <div className="main">
            {products &&
              products.length > 0 &&
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Dashboard;
