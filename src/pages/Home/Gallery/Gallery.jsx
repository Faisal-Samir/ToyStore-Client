import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {

    useEffect(() => {
        AOS.init(); 
    }, []);

    return (
        <div>
            <h1 className='text-5xl text-center font-bold mt-10'>Our Gallery</h1>
            <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                <div class="-m-1 flex flex-wrap md:-m-2">
                    <div class="flex w-1/2 flex-wrap">
                        <div class="w-1/2 p-1 md:p-2" data-aos="flip-left" data-aos-delay="500">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center border-2"
                                src="gallery1.jpg" />
                        </div>
                        <div class="w-1/2 p-1 md:p-2" data-aos="flip-left" data-aos-delay="500">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center border-2"
                                src="gallery2.avif" />
                        </div>
                        <div class="w-full p-1 md:p-2" data-aos="flip-left" data-aos-delay="500">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center border-2"
                                src="gallery3.jpg" />
                        </div>
                    </div>
                    <div class="flex w-1/2 flex-wrap">
                        <div class="w-full p-1 md:p-2" data-aos="flip-left" data-aos-delay="500">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src="gallery4.jpg" />
                        </div>
                        <div class="w-1/2 p-1 md:p-2" data-aos="flip-left" data-aos-delay="500">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center border-2"
                                src="gallery5.jpg" />
                        </div>
                        <div class="w-1/2 p-1 md:p-2" data-aos="flip-left" data-aos-delay="500">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center border-2"
                                src="gallery6.jpeg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;