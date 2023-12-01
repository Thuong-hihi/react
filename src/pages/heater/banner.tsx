import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <img className="w-full object-cover" src="../../../public/images/bn1.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-full'  src="../../../public/images/bn2.jpg"  alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-full' src="../../../public/images/bn3.jpg"  alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-full'  src="../../../public/images/bn1.jpg"  alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='w-full'  src="../../../public/images/bn5.jpg"  alt="" />
                    </div>
                </SwiperSlide>
               
            </Swiper>
        </div>
    );
};


