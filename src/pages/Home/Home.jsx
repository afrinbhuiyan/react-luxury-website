import './Home.css'
import Navbar from "../../Shared/NavBar/Navbar";

import Footer from "../../Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useLoaderData } from 'react-router';
import Properties from '../Properties/Properties';
import Header from '../../Shared/Header/Header';

const Home = () => {
    const data = useLoaderData([])
    console.log(data)
    return (
        <div>
            <Header></Header>
            <div className="mx-40">
                <Navbar></Navbar>
            </div>
            <div className="">
                <div className="">
                    <Swiper
                        // effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={
                            {
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                            }
                        }
                        pagination={{ el: '.swiper-pagination', clickable: true, }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container h-[730px] mb-10"
                    >
                        <SwiperSlide>
                            <div
                                className="jero w-[100%] h-[700px]"
                                style={{
                                    backgroundImage: "url(https://i.ibb.co.com/stQbhyk/lycs-architecture-k-Udb-EEMc-Rw-E-unsplash.jpghttps://i.ibb.co.com/stQbhyk/lycs-architecture-k-Udb-EEMc-Rw-E-unsplash.jpg)",
                                }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="lg:my-auto lg:mx-48 text-white lg:flex lg:justify-between">
                                    <div className="">
                                        <p className='text-[22px] font-bold mb-2'>LUXURY HOUSES</p>
                                        <h1 className="mb-5 text-7xl font-bold border-l-4 border-l-[#ffffff4d] pl-6">Luxury <br /> Recidence here</h1>
                                        <p className="text-[22px] mb-5">
                                            Whether youre looking to sell or let youre home or want to buy <br /> or rent a home. we really are the people for you to come to.
                                        </p>
                                        <button className="py-3 px-9 bg-[#ffffff4d] hover:bg-[#5493f1] ">Get Started</button>
                                    </div>
                                    <div className='bg-[#1111117a] text-center my-auto pt-10'>
                                        <h3 className='text-[20px] mb-3'>SALE PRICE</h3>
                                        <h1 className='text-4xl font-bold mb-8'>$ 250,199</h1>
                                        <button className='py-3 px-24 bg-[#5493f1] hover:bg-[#1c1a5a]'>MORE DETAIL</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="jero w-[100%] h-[700px]"
                                style={{
                                    backgroundImage: "url(https://i.ibb.co.com/d2MpdvH/frames-for-your-heart-vb-SRUr-Nm3-Ik-unsplash.jpg)",
                                }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="lg:my-auto lg:mx-48 text-white lg:flex lg:justify-between">
                                    <div className="">
                                        <p className='text-[22px] font-bold mb-2'>LUXURY HOUSES</p>
                                        <h1 className="mb-5 text-7xl font-bold border-l-4 border-l-[#ffffff4d] pl-6">Luxury <br /> Recidence here</h1>
                                        <p className="text-[22px] mb-5">
                                            Whether youre looking to sell or let youre home or want to buy <br /> or rent a home. we really are the people for you to come to.
                                        </p>
                                        <button className="py-3 px-9 bg-[#ffffff4d] hover:bg-[#5493f1] ">Get Started</button>
                                    </div>
                                    <div className='bg-[#1111117a] text-center my-auto pt-10'>
                                        <h3 className='text-[20px] mb-3'>SALE PRICE</h3>
                                        <h1 className='text-4xl font-bold mb-8'>$ 270,199</h1>
                                        <button className='py-3 px-24 bg-[#5493f1] hover:bg-[#1c1a5a]'>MORE DETAIL</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="jero w-[100%] h-[700px]"
                                style={{
                                    backgroundImage: "url(https://i.ibb.co.com/jHGdSt8/walter-sturn-fol-Cc8-Q8k-unsplash.jpg)",
                                }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="lg:my-auto lg:mx-48 text-white lg:flex lg:justify-between">
                                    <div className="">
                                        <p className='text-[22px] font-bold mb-2'>LUXURY HOUSES</p>
                                        <h1 className="mb-5 text-7xl font-bold border-l-4 border-l-[#ffffff4d] pl-6">Luxury <br /> Recidence here</h1>
                                        <p className="text-[22px] mb-5">
                                            Whether youre looking to sell or let youre home or want to buy <br /> or rent a home. we really are the people for you to come to.
                                        </p>
                                        <button className="py-3 px-9 bg-[#ffffff4d] hover:bg-[#5493f1] ">Get Started</button>
                                    </div>
                                    <div className='bg-[#1111117a] text-center my-auto pt-10'>
                                        <h3 className='text-[20px] mb-3'>SALE PRICE</h3>
                                        <h1 className='text-4xl font-bold mb-8'>$ 300,199</h1>
                                        <button className='py-3 px-24 bg-[#5493f1] hover:bg-[#1c1a5a]'>MORE DETAIL</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="jero w-[100%] h-[700px]"
                                style={{
                                    backgroundImage: "url(https://i.ibb.co.com/stQbhyk/lycs-architecture-k-Udb-EEMc-Rw-E-unsplash.jpghttps://i.ibb.co.com/stQbhyk/lycs-architecture-k-Udb-EEMc-Rw-E-unsplash.jpg)",
                                }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="lg:my-auto lg:mx-48 text-white lg:flex lg:justify-between">
                                    <div className="">
                                        <p className='text-[22px] font-bold mb-2'>LUXURY HOUSES</p>
                                        <h1 className="mb-5 text-7xl font-bold border-l-4 border-l-[#ffffff4d] pl-6">Luxury <br /> Recidence here</h1>
                                        <p className="text-[22px] mb-5">
                                            Whether youre looking to sell or let youre home or want to buy <br /> or rent a home. we really are the people for you to come to.
                                        </p>
                                        <button className="py-3 px-9 bg-[#ffffff4d] hover:bg-[#5493f1] ">Get Started</button>
                                    </div>
                                    <div className='bg-[#1111117a] text-center my-auto pt-10'>
                                        <h3 className='text-[20px] mb-3'>SALE PRICE</h3>
                                        <h1 className='text-4xl font-bold mb-8'>$ 250,199</h1>
                                        <button className='py-3 px-24 bg-[#5493f1] hover:bg-[#1c1a5a]'>MORE DETAIL</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="jero w-[100%] h-[700px]"
                                style={{
                                    backgroundImage: "url(https://i.ibb.co.com/d2MpdvH/frames-for-your-heart-vb-SRUr-Nm3-Ik-unsplash.jpg)",
                                }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="lg:my-auto lg:mx-48 text-white lg:flex lg:justify-between">
                                    <div className="">
                                        <p className='text-[22px] font-bold mb-2'>LUXURY HOUSES</p>
                                        <h1 className="mb-5 text-7xl font-bold border-l-4 border-l-[#ffffff4d] pl-6">Luxury <br /> Recidence here</h1>
                                        <p className="text-[22px] mb-5">
                                            Whether youre looking to sell or let youre home or want to buy <br /> or rent a home. we really are the people for you to come to.
                                        </p>
                                        <button className="py-3 px-9 bg-[#ffffff4d] hover:bg-[#5493f1] ">Get Started</button>
                                    </div>
                                    <div className='bg-[#1111117a] text-center my-auto pt-10'>
                                        <h3 className='text-[20px] mb-3'>SALE PRICE</h3>
                                        <h1 className='text-4xl font-bold mb-8'>$ 250,199</h1>
                                        <button className='py-3 px-24 bg-[#5493f1] hover:bg-[#1c1a5a]'>MORE DETAIL</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="jero w-[100%] h-[700px]"
                                style={{
                                    backgroundImage: "url(https://i.ibb.co.com/jHGdSt8/walter-sturn-fol-Cc8-Q8k-unsplash.jpg)",
                                }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="lg:my-auto lg:mx-48 text-white lg:flex lg:justify-between">
                                    <div className="">
                                        <p className='text-[22px] font-bold mb-2'>LUXURY HOUSES</p>
                                        <h1 className="mb-5 text-7xl font-bold border-l-4 border-l-[#ffffff4d] pl-6">Luxury <br /> Recidence here</h1>
                                        <p className="text-[22px] mb-5">
                                            Whether youre looking to sell or let youre home or want to buy <br /> or rent a home. we really are the people for you to come to.
                                        </p>
                                        <button className="py-3 px-9 bg-[#ffffff4d] hover:bg-[#5493f1] ">Get Started</button>
                                    </div>
                                    <div className='bg-[#1111117a] text-center my-auto pt-10'>
                                        <h3 className='text-[20px] mb-3'>SALE PRICE</h3>
                                        <h1 className='text-4xl font-bold mb-8'>$ 250,199</h1>
                                        <button className='py-3 px-24 bg-[#5493f1] hover:bg-[#1c1a5a]'>MORE DETAIL</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className="jero w-[100%] h-[700px]"
                                style={{
                                    backgroundImage: "url(https://i.ibb.co.com/d2MpdvH/frames-for-your-heart-vb-SRUr-Nm3-Ik-unsplash.jpg)",
                                }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="lg:my-auto lg:mx-48 text-white lg:flex lg:justify-between">
                                    <div className="">
                                        <p className='text-[22px] font-bold mb-2'>LUXURY HOUSES</p>
                                        <h1 className="mb-5 text-7xl font-bold border-l-4 border-l-[#ffffff4d] pl-6">Luxury <br /> Recidence here</h1>
                                        <p className="text-[22px] mb-5">
                                            Whether youre looking to sell or let youre home or want to buy <br /> or rent a home. we really are the people for you to come to.
                                        </p>
                                        <button className="py-3 px-9 bg-[#ffffff4d] hover:bg-[#5493f1] ">Get Started</button>
                                    </div>
                                    <div className='bg-[#1111117a] text-center my-auto pt-10'>
                                        <h3 className='text-[20px] mb-3'>SALE PRICE</h3>
                                        <h1 className='text-4xl font-bold mb-8'>$ 250,199</h1>
                                        <button className='py-3 px-24 bg-[#5493f1] hover:bg-[#1c1a5a]'>MORE DETAIL</button>
                                    </div>
                                </div>
                            </div>
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
                <div>
                    <div className='mb-20'>
                        <h5 className='text-[#67abeb] font-bold text-center ' >Our Featured Properties For Sale and Rent</h5>
                        <h1 className='text-4xl font-bold text-center '>Properties <span className='border-b-4 pb-5 border-blue-500'>Fo</span><span className='border-b-4 pb-5 border-b-[#111] '>r S</span>ale & Rent</h1>
                        <div className='grid grid-cols-3 mx-64 '>
                            {
                                data.map(properties => <Properties key={properties.id} properties={properties} ></Properties>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;