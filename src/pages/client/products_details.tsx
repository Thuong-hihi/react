import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProductsByid } from "../../api/products";
import { IProduct } from "../../types/products";
import { Header } from "../heater/header";

export const Products_details = () => {
  const { id } = useParams();
  const [products, setProduct] = useState<IProduct>();
  const [quantity, setQuantity] = useState(1); // New state for quantity

  useEffect(() => {
    const fetchData = async (id: number) => {
      const response = await GetProductsByid(id);
      setProduct(response.data);
    };
    fetchData(Number(id));
  }, [id]);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        {products && (
          <div className="flex mx-[100px] mt-[50px]">
            <div className="ml-[150px]">
              <img src={products.image} alt="" className="w-[300px] h-[300px]" />
            </div>
            <div className="ml-[100px]">
              <h1 className="text-xl font-semibold">name : {products.name}</h1>
              <p className="text-xl font-semibold">price : {products.price}</p>
              <p className="text-xl font-semibold">desc : {products.desc}</p>
              <div className="mt-[10px] flex">
                <button className="w-[50px] border h-[30px]  text-xl" onClick={handleIncrement}>
                  +
                </button>
                <input type="text" className="border w-[50px] h-[30px]" value={quantity} readOnly />
                <button className="w-[50px] border h-[30px]  text-xl" onClick={handleDecrement}>
                  -
                </button>
              </div>
              <div className="mt-[20px]">
                <button className="w-[200px] border h-[50px]  text-xl">Cart</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
