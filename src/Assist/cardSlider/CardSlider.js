import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

const CardSlider = () => {

    SwiperCore.use([Autoplay, Navigation]);

    const sliderItems =
        [
            {
                id: "1",
                title: "product title one",
                img: [
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg",
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg",
                    "https://ydbrand.imgix.net/YD/PWA-Products/Y221SJ08_TEA_1.png?bg=e6e6e6&fm=jpg&auto=format%2Ccompress&format=pjpg&w=250&h=354&fit=cover&rect=440%2C0%2C2120%2C3000&cs=tinysrgb&q=75&dpr=2&ch=Width%2CDPR"
                ],
                suits: "25% off suits",
                price: "$9.99",
                color: ["red-500", "blue-500", "gray-900", "white"]
            },
            {
                id: "2",
                title: "product title 2",
                img: [
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg",
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg"
                ],
                suits: "25% off suits",
                price: "$9.99",
                color: ["blue-500", "red-200", "gray-300", "blue-900", "white"]
            },
            {
                id: "3",
                title: "product title 3",
                img: [
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg",
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg"
                ],
                suits: "25% off suits",
                price: "$9.99",
                color: ["red-500", "gray-900", "blue-500", "white"]
            },
            {
                id: "4",
                title: "product title 4",
                img: [
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg",
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg"
                ],
                suits: "25% off suits",
                price: "$9.99",
                color: ["red-500", "gray-900", "blue-500", "white"]
            },
            {
                id: "5",
                title: "product title 5",
                img: [
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg",
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg"
                ],
                suits: "25% off suits",
                price: "$9.99",
                color: ["red-500", "gray-900", "blue-500", "white"]
            },
            {
                id: "6",
                title: "product title 6",
                img: [
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg",
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg"
                ],
                suits: "25% off suits",
                price: "$9.99",
                color: ["red-500", "gray-900", "blue-500", "white"]
            },
            {
                id: "7",
                title: "product title 7",
                img: [
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg",
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg"
                ],
                suits: "25% off suits",
                price: "$9.99",
                color: ["red-500", "gray-900", "blue-500", "white"]
            },
            {
                id: "8",
                title: "product title one",
                img: [
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg",
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg"
                ],
                suits: "",
                price: "$9.99",
                color: ["red-500", "gray-900", "blue-500", "white"]
            },
            {
                id: "9",
                title: "product title one",
                img: [
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg",
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg"
                ],
                suits: "25% off suits",
                price: "$9.99",
                color: ["red-500", "gray-900", "blue-500", "white"]
            },
            {
                id: "10",
                title: "product title one",
                img: [
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg",
                    "https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg"
                ],
                suits: "25% off suits",
                price: "$9.99",
                color: ["red-500", "gray-900", "blue-500", "white"]
            },
        ]

    return (
        <>
            <div className='px-10'>
                <Swiper
                    navigation
                    spaceBetween={20}
                    slidesPerView={4}

                >
                    {sliderItems.map((item) => (
                        <SwiperSlide key={item.id}>

                            <Swiper
                                navigation
                            >
                                {item.img.map((image) => (
                                    <SwiperSlide>
                                        <img src={image} alt="slider-img" />
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                            <h4 className='text-2xl uppercase font-thin'>{item.title}</h4>
                            <h4 className='uppercase text-pink-500 font-bold'>{item.suits}</h4>
                            <p className='font-bold'>{item.price}</p>
                            <div className='flex flex-cols gap-1'>
                                {item.color.map(cl => (
                                    <div className={`h-[12px] w-[12px] bg-${cl} rounded-full`}></div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* <div className='px-10'>
                <Swiper
                    navigation
                    spaceBetween={20}
                    slidesPerView={6}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}

                >
                    <SwiperSlide className='mb-4'>
                        <Swiper
                            navigation
                        >
                            <SwiperSlide>
                                <img src="https://ydbrand.imgix.net/YD/PWA-Products/Y221SJ08_TEA_1.png?bg=e6e6e6&fm=jpg&auto=format%2Ccompress&format=pjpg&w=250&h=354&fit=cover&rect=440%2C0%2C2120%2C3000&cs=tinysrgb&q=75&dpr=2&ch=Width%2CDPR" alt='a' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg" alt='a' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg" alt='a' />
                            </SwiperSlide>
                        </Swiper>
                        <h4 className='text-2xl uppercase font-thin'>This is product title</h4>
                        <h4 className='uppercase text-pink-500 font-bold'>25% off suits</h4>
                        <p className='font-bold'>$99.99</p>
                        <div className='flex flex-cols gap-1'>
                            <div className='h-[12px] w-[12px] bg-red-500 rounded-full'></div>
                            <div className='h-[12px] w-[12px] bg-gray-900 rounded-full'></div>
                            <div className='h-[12px] w-[12px] bg-gray-100 rounded-full'></div>
                            <div className='h-[12px] w-[12px] bg-blue-500 rounded-full'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Swiper
                            navigation
                        >
                            <SwiperSlide>
                                <img src="https://ydbrand.imgix.net/YD/PWA-Products/Y221SJ08_TEA_1.png?bg=e6e6e6&fm=jpg&auto=format%2Ccompress&format=pjpg&w=250&h=354&fit=cover&rect=440%2C0%2C2120%2C3000&cs=tinysrgb&q=75&dpr=2&ch=Width%2CDPR" alt='a' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg" alt='a' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://i.ibb.co/NrZr0T2/2-shop-by-category-banner-600x840-18-1-23.jpg" alt='a' />
                            </SwiperSlide>
                        </Swiper>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="bg-red-100">This is a slider one</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="bg-red-900">This is a slider one</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="bg-red-800">This is a slider one</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="bg-red-700">This is a slider one</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="bg-red-600">This is a slider one</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="bg-red-500">This is a slider one</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="bg-red-400">This is a slider one</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="bg-red-300">This is a slider one</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="bg-red-200">This is a slider one</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className="bg-red-100">This is a slider one</h1>
                    </SwiperSlide>
                </Swiper>
            </div> */}



        </>
    );
};

export default CardSlider;
