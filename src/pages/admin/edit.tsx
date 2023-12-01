import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../../types/products";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { Updates, GetProducts } from "../../api/products";
import { useEffect } from "react";

export const Edit = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IProduct>();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { data } = useQuery({
        queryKey: ["PRODUCT_KEY"],
        queryFn: async () => {
            const { data } = await GetProducts();
            return data;
        },
    });

    const product = data?.find((pro: IProduct) => pro.id === Number(id));
    useEffect(() => {
        if (product) {
            reset(product);
        }
    }, [product, reset]);

    const { mutate } = useMutation({
        mutationFn: (data: IProduct) => {
            return Updates(data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries();
            alert("Update thành công");
            navigate("/admin");
        },
    });

    const onhandleSubmit: SubmitHandler<IProduct> = (data) => {
        mutate(data);
    };

    return (
        <div className="mt-20 text-center">
            <div>
                <h1 className="text-3xl font-semibold">Chỉnh sửa sản phẩm</h1>
            </div>

            <form className="mt-20" onSubmit={handleSubmit(onhandleSubmit)}>
            <div className='my-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                        Tên Sản Phẩm
                    </label>
                    <input
                        className='border rounded w-full py-2 px-3'
                        type='text'
                        {...register('name', {
                            required: true,
                            pattern: /^[^\s]+(\s+[^\s]+)*$/, // Không chấp nhận chuỗi chỉ toàn khoảng trắng
                            maxLength: 5, // Yêu cầu không quá 5 ký tự
                        })}
                    />
                    {errors.name && errors.name.type === 'required' && (
                        <p className='text-red-500 text-xs italic'>Tên không được bỏ trống</p>
                    )}
                    {errors.name && errors.name.type === 'pattern' && (
                        <p className='text-red-500 text-xs italic'>Tên không được chỉ chứa khoảng trắng</p>
                    )}
                    {errors.name && errors.name.type === 'maxLength' && (
                        <p className='text-red-500 text-xs italic'>Tên không được quá 5 ký tự</p>
                    )}
                </div>

                <div className='my-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='image'>
                        Ảnh Sản Phẩm
                    </label>
                    <input
                        className='border rounded w-full py-2 px-3'
                        type='text'
                        {...register('image', { required: true })}
                    />
                    {errors.image && <p className='text-red-500 text-xs italic'>Ảnh không được bỏ trống</p>}
                </div>

                <div className='my-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                        Giá sản phẩm
                    </label>
                    <input
                        className='border rounded w-full py-2 px-3'
                        type='number'
                        {...register('price', { required: true })}
                    />
                    {errors.price && <p className='text-red-500 text-xs italic'>Giá không được bỏ trống</p>}
                </div>

                <div className='my-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                        Mô tả sản phẩm
                    </label>
                    <input
                        className='border rounded w-full py-2 px-3'
                        type='text'
                        {...register('desc', { required: true })}
                    />
                    {errors.desc && <p className='text-red-500 text-xs italic'>Mô tả không được bỏ trống</p>}
                </div>

                <div className='my-4'>
                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300' type='submit'>
                        Cập nhật
                    </button>
                </div>
            </form>
        </div>
    );
};
