import { useEffect, useState } from 'react'
import { Header } from '../heater/header'
import { IProduct } from '../../types/products'
import axios from 'axios'
import { Link } from 'react-router-dom';
export const Productslist = () => {
    const [products, setproducts] = useState<IProduct[]>([])

    useEffect(() => {
        axios.get(`http://localhost:3000/products`)
            .then(({ data }) => {
                setproducts(data);
            })
    }, [])
    return (
        <div>
            <Header />


            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                #
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Name
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Price
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Image
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Desc
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Action
                            </th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">


                        {
                            products.map((item, index) => (
                                <tr key={index}>
                                    <td className="whitespace-nowrap px-6 py-2 font-medium text-gray-900 pl-[30px]">
                                        {index + 1}
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.name}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.price}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        <img src={item.image} alt="" />
                                    </td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.desc}</td>
                                    <td className="whitespace-nowrap px-4 py-2">
                                        <Link
                                            to={`/products/${item.id}`} // Đường dẫn của trang ProductDetail với id sản phẩm
                                            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            Detail
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}