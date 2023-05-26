import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AvengerToy from '../../AvengerToy/AvengerToy';
import StarWarToy from '../../StarWarToy/StarWarToy';
import TransformerToy from '../../TransformerToy/TransformerToy';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {
    const [avenger, setAvenger] = useState([]);
    const [starWars, setStarWars] = useState([]);
    const [transformers, setTransformers] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 600 });
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/toys?subCategoryName=Avenger`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAvenger(data);
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/toys?subCategoryName=StarWars`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setStarWars(data);
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/toys?subCategoryName=Transformers`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTransformers(data);
            })
    }, [])
    return (
        <div className='mt-10 mb-10 w-2/3 lg:mx-auto'>
            <h1 className='text-center text-3xl font-bold mb-8' data-aos='fade-up'   >Toy Category</h1>
            <Tabs >
                <TabList className="space-x-5 text-center">
                    <Tab>Action figure toys</Tab>
                </TabList>

                <TabPanel className="mt-5 text-center" data-aos='fade-up'>
                    <Tabs>
                        <TabList className="">
                            <Tab>Avengers</Tab>
                            <Tab>StarWars</Tab>
                            <Tab>Transformers</Tab>
                        </TabList>

                        <TabPanel className="mt-5">
                            <div className='mt-16 -ml-5 lg:ml-0 grid grid-cols-1 lg:grid-cols-2 gap-2'>
                                {
                                    avenger?.map(avgToy => <AvengerToy key={avgToy._id} avgToy={avgToy} data-aos='fade-up'   ></AvengerToy>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel className="mt-5">
                            <div className='mt-16 -ml-5 lg:ml-0 grid grid-cols-1 lg:grid-cols-2 gap-2'>
                                {
                                    starWars?.map(starToy => <StarWarToy key={starToy._id} starToy={starToy} data-aos='fade-up'   ></StarWarToy>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel className="mt-5">
                            <div className='mt-16 -ml-5 lg:ml-0 grid grid-cols-1 lg:grid-cols-2 gap-2'>
                                {
                                    transformers?.map(transformerToy => <TransformerToy key={transformerToy._id} transformerToy={transformerToy} data-aos='fade-up'   ></TransformerToy>)
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </TabPanel>

            </Tabs >
        </div>
    );
};

export default Category;

