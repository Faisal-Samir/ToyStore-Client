import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-5 mb-5">Testimonials</h1>
            <p className="text-center mb-3 text-lg ">Get services from us and give some feedback and best wishers</p>
            <div className="w-5/6 border-2 rounded-xl border-black mx-auto bg-pink-100 max-h-60 overflow-y-auto mb-5">
                {/* review_1 */}
                <div className="flex items-center gap-5 lg:gap-20  pb-4">
                    <img src="/testiminial.jpg" className="w-24 h-24 rounded-full ml-24 my-10" alt="" />
                    <div>
                        <h2 className="text-3xl font-semiboldbold mt-5">Abrar Faisal</h2>
                        <p className="pr-20 text-slate-700 mt-4 mb-5 text-justify">I purchased the Toyosis Action Figure Set for my son, and he absolutely loves it! The figures are well-designed and made with high-quality materials. They have a great level of detail and are durable enough to withstand rough play. The set includes a variety of characters that provide endless imaginative play opportunities. Overall, I highly recommend Toyosis toys for their excellent quality and entertainment value.</p>
                        <div id='review' className='mb-2'>
                            <p className='text-lg'>Rating: 4.1</p>
                        </div>
                        <Rating style={{ maxWidth: 100 }} className='text-blue-500' value={4.1} readOnly />
                    </div>
                </div>

                {/* Review_2 */}
                <div className="flex items-center gap-5 lg:gap-20  pb-4 ">
                    <img src="/testiminial_4.jpg" className="w-24 h-24 rounded-full ml-24 my-10" alt="" />
                    <div>
                        <h2 className="text-3xl font-semiboldbold mt-5">Tanvir Utsho</h2>
                        <p className="pr-20 text-slate-700 mt-4 mb-3 text-justify">I recently bought the Toyosis Transformers robotic Set for my daughter, and she has been enjoying it immensely. The puzzles are easy to connect and create different structures. They come in vibrant colors and are made of non-toxic materials, ensuring the safety of my child. The only reason I'm giving it a 4-star rating instead of 5 is that I wish the set included more blocks for even more creativity. Nevertheless, it's a great toy that promotes fine motor skills and imaginative play.</p>
                        <div id='review' className='mb-2'>
                            <p className='text-lg'>Rating: 4</p>
                        </div>
                        <Rating style={{ maxWidth: 100 }} className='text-blue-500' value={4} readOnly />
                    </div>
                </div>

                {/* Review_3 */}
                <div className="flex items-center gap-5 lg:gap-20  pb-4 ">
                    <img src="/aziz.jpg" className="w-24 h-24 rounded-full ml-24 my-10" alt="" />
                    <div>
                        <h2 className="text-3xl font-semiboldbold mt-5">Shah Azizur Rahman</h2>
                        <p className="pr-20 text-slate-700 mt-4 mb-5 text-justify">I purchased the Toyosis Plush Toy as a gift for my niece, and it turned out to be a hit! The plush toy is incredibly soft and cuddly, making it perfect for snuggling. The stitching is well-done, and the toy has held up nicely even with constant hugging and play. The only minor downside is that it could have been slightly bigger for the price. Nonetheless, it's an adorable and well-made plush toy that brings joy to any child.</p>
                        <div id='review' className='mb-2'>
                            <p className='text-lg'>Rating: 4.5</p>
                        </div>
                        <Rating style={{ maxWidth: 100 }} className='text-blue-500' value={4.5} readOnly />
                    </div>
                </div>

                {/* Review_4 */}
                <div className="flex items-center gap-5 lg:gap-20  pb-4 ">
                    <img src="/samir.jpg" className="w-24 h-24 rounded-full ml-24 my-10" alt="" />
                    <div>
                        <h2 className="text-3xl font-semiboldbold mt-5">Samir Faisal</h2>
                        <p className="pr-20 text-slate-700 mt-4 mb-5 text-justify">I recently purchased a Star Wars toy from the Toyosis brand, and I must say, I'm extremely satisfied with the quality and attention to detail. The level of craftsmanship in recreating the iconic Star Wars characters and vehicles is outstanding. The toy I bought was a Star Wars action figure, and it truly captures the essence of the character. The paint job is impeccable, with vibrant colors and precise detailing on the costume. The articulation allows for dynamic poses, making it perfect for display or play.</p>
                        <div id='review' className='mb-2'>
                            <p className='text-lg'>Rating: 4.2</p>
                        </div>
                        <Rating style={{ maxWidth: 100 }} className='text-blue-500' value={4.2} readOnly />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;