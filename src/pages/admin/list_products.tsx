
import { Delete, GetProducts } from "../../api/products"
import { useQuery } from '@tanstack/react-query';
import { IProduct } from "../../types/products";

import { Header } from "../heater/header";
import { Footer } from "../heater/footter";

export const List_products = () => {
   
    const { data: products, isLoading, isError, refetch } = useQuery({
        queryKey: ['PRODUCT_KEY'],
        queryFn: async () => {
            const { data } = await GetProducts();
            return data;
        }
    })


    const handleRemove = (id: number) => {
        const tb = window.confirm("Bạn có muốn xóa hay không!")
        if (!tb) return;
        Delete(id)
            .then(() => {
                alert("thanh cong")
                refetch()
            })
    }

    if (isLoading) return <div>Loading... </div>;
    if (isError) return <div>Error ... </div>;
    return (
        <div>
          <Header/>
            <div>
                <h1 className='text-4xl font-bold '>Dashboard</h1>
                <div>
                    <a href="/admin/add"><button className='w-[100px] h-[30px]  my-[20px] ml-[20px] rounded-lg overflow-hidden border-dashed border-2 border-yellow-500 hover:border-solid'>Add</button></a>
                </div>
                <table>
                    <thead>
                        <tr className='text-center'>
                            <th className='w-[100px]'>#</th>
                            <th className='w-[200px]'>Name</th>
                            <th className='w-[300px]'>Image</th>
                            <th className='w-[200px]'>Price</th>
                            <th className='w-[200px]'>Desc</th>
                            <th className='w-[300px]'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((item: IProduct) => (
                            <tr className='text-center' key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>  <img src={item.image} alt={item.name} /></td>
                                <td>{item.price}</td>
                                <td>{item.desc}</td>
                                <td>
                                    <button onClick={() => handleRemove(item.id!)} className="border w-[80px] h-[40px] text-[16px] font-medium bg-[blue] text-[white]">Delete</button>
                                    <a href={`/admin/edit/${item.id}`}><button className="border w-[80px] h-[40px] text-[16px] font-medium bg-[red] text-[white]">Edit</button></a>


                                </td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    )
}