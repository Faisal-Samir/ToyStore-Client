import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillPhone } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { MdAttachEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content mx-auto border">
                <div className='lg:flex justify-center  mx-auto lg:gap-80 '>
                    <div className='flex flex-col lg:space-y-2 mb-4 lg:mb-0'>
                        <span className="footer-title">Company</span>
                        <Link className='hover:underline' to="/">Home</Link>

                        <Link className='hover:underline' to="/allToys">All Toys</Link>

                        <Link className='hover:underline' to="/blogs">Blogs</Link>
                    </div>
                    <div className='flex flex-col lg:space-y-2 mb-4 lg:mb-0'>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <span className="footer-title">Contact With Us</span>
                        <p className=""><span className='flex gap-2 items-center'><MdAttachEmail className='w-5 h-5' /> support.toyosis@gmail.bd</span></p>

                        <p className=""><span className='flex gap-2 items-center'><AiFillPhone className='w-5 h-5' /> 016192523219</span></p>

                        <p className=""><span className='flex gap-2 items-center'><GoLocation className='w-5 h-5' /> Kalachadpur, Baridhara, Dhaka</span></p>
                    </div>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className=" lg:ml-44 items-center grid-flow-col">
                    <img src="toy_logo.png" className='w-20 h-20' alt="" />
                    <p>Toyosis <br />Providing reliable toy service since 2022</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 lg:mr-52">
                        <Link to="https://www.facebook.com/PRIMESAMIR"><BsFacebook className='w-7 h-7' /></Link>
                        <Link to="https://www.linkedin.com/in/samir-faisal-a27500190/"><AiFillLinkedin className='w-7 h-7' /></Link>
                        <Link to="https://youtu.be/OXf5ynsManA"><AiFillYoutube className='w-7 h-7' /></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;