import Navbar from "../../Shared/NavBar/Navbar";
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import Footer from "../../Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.jpg';
import slider3 from '../../assets/slider3.jpg';
import slider4 from '../../assets/slider4.jpg';
import slider5 from '../../assets/slider5.jpg';
import slider6 from '../../assets/slider6.jpg';
import slider7 from '../../assets/sliderr.jpg';

const Home = () => {
    return (
        <div>
            <div className="navbar flex justify-center bg-[#1111] border-b border-[#1111111c]">
                <p className="border-r border-[#1111113b] px-6 text-[#1c1a5a]"> <SlLocationPin className="mr-3" ></SlLocationPin> Road - Dhaka </p>
                <p className="border-r border-[#1111113b] px-6 text-[#1c1a5a]"> <FiPhone className="mr-3" ></FiPhone> 04546789990 </p>
                <p className="border-r border-[#1111113b] px-6 text-[#1c1a5a]"> <LuMail className="mr-3" ></LuMail> Luxury@Gmail.com </p>
                <p className="px-6"> <IoIosSearch className="text-2xl text-[#1c1a5a]" ></IoIosSearch> </p>
            </div>
            <div className="mx-40">
                <Navbar></Navbar>
                </div>
            <div className="mt-8 flex">
                
                <h1>This is home</h1>
                <div className="my-10">
                    <Swiper
                        // effect={'coverflow'}
                        // grabCursor={true}
                        // centeredSlides={true}
                        // loop={true}
                        slidesPerView={'auto'}
                        // coverflowEffect={
                        //     {
                        //         rotate: 0,
                        //         stretch: 0,
                        //         depth: 100,
                        //         modifier: 2.5,
                        //     }
                        // }
                        pagination={{el:'.swiper-pagination', clickable:true,  }}
                        navigation={{
                            nextEl:'.swiper-button-next',
                            // prevEl: '.swiper-button-prev',
                            clickable: true
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container w-[50%]"
                    >
                        <SwiperSlide>
                            <img src={slider1} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slider2} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slider3} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slider4} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slider5} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slider6} alt="slide_image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={slider7} alt="slide_image" />
                        </SwiperSlide>

                        <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow " >
                                <ion-icon name="arrow-back-outline" ></ion-icon>
                            </div>
                            <div className="swiper-button-next slider-arrow " >
                                <ion-icon name="arrow-forward-outline" ></ion-icon>
                            </div>
                              <div className="swiper-pagination"></div>
                        </div>

                    </Swiper>
                        
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;