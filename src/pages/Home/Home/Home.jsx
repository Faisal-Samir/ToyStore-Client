import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Category from '../Category/Category';
import { AuthContext } from '../../../providers/AuthProvider';
import UseTitle from '../../../hooks/UseTitle';
import Testimonial from '../Testimonial/Testimonial';
import Service from '../Service/Service';

const Home = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className='mt-5 text-center'><progress className="progress w-56 "></progress></div>
    }
    UseTitle('Home');
    return (
        <div >
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Testimonial></Testimonial>
            <Service></Service>
        </div>
    );
};

export default Home;