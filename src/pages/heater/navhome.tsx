import React from 'react';
import { Link } from 'react-router-dom';

export const Navhome = () => {
    return (
        <div className='w-[150px] shadow-xl text-center'>
            <nav>
                <ul className=' items-center justify-center pb-[10px]'>
                    <li className=' hover:scale-105  h-[40px] py-[5px] mt-[10px]'>
                        <Link to="/admin" className='text-[18px] font-medium'>
                            Admin
                        </Link>
                    </li>
                    <li className=' hover:scale-105  h-[40px] py-[5px] mt-[10px]'>
                        <Link to="/products" className='text-[18px] font-medium'>
                            Sản Phẩm
                        </Link>
                    </li>
                    {/* <li className=' hover:scale-105  h-[40px] py-[5px] mt-[10px]'>
                        <Link to="/menu" className='text-[18px] font-medium'>
                            Menu
                        </Link>
                    </li> */}
                </ul>
            </nav>
        </div>
    );
};
