
import { Header } from '../heater/header';
import { Navhome } from '../heater/navhome';
import { useQuery } from '@tanstack/react-query';
import { GetProducts } from '../../api/products';
import { IProduct } from '../../types/products';
import { Footer } from '../heater/footter';
import { Banner } from '../heater/banner';

export const HomePages = () => {
 
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ['PRODUCT_KEY'],
    queryFn: async () => {
      const { data } = await GetProducts();
      return data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div className="">
      <div>
        <Header />
      </div>

      <div className="mt-[50px]">
        <Banner />
      </div>

     

      <div className="gap-5 mx-[80px]">
        <Navhome />
        <aside className="grid grid-cols-4 gap-5 ">
          {products?.map((item: IProduct) => (
            <a href={`/products/${item.id}`} key={item.id}>
              <div className="text-center p-4 bg-white shadow-md mt-[10px] w-[230px]">
                <h1 className="text-[18px] font-medium">{item.name}</h1>
                <img src={item.image} alt={item.name} className="h-[280px] my-[10px]" />
                <p className="text-[18px] font-normal text-[red]">{item.price} vnd</p>
                <p className="text-[18px] font-normal">{item.desc}</p>
                <button className="w-[100px] border h-[40px] bg-green-300 text-[white]">Buy</button>
              </div>
            </a>
          ))}
        </aside>
      </div>

      <Footer />
    </div>
  );
};

