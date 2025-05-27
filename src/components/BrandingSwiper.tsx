import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation } from 'swiper/modules'
import Image from 'next/image'

const BrandingSwiper = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={1}
                navigation={true}
                modules={[Navigation]}
                className='mySwiper relative mt-4'
            >
                <SwiperSlide>
                    <Image
                        src='/images/projects/branding/logos-1.jpg'
                        alt='Logos 1'
                        width={1920}
                        height={1080}
                        loading='lazy'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src='/images/projects/branding/logos-2.jpg'
                        alt='Logos 2'
                        width={1920}
                        height={1080}
                        loading='lazy'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src='/images/projects/branding/logos-3.jpg'
                        alt='Logos 3'
                        width={1920}
                        height={1080}
                        loading='lazy'
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default BrandingSwiper
