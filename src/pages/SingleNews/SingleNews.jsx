import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import SingleNewsCard from './singleNewsCard';

const SingleNews = () => {

    const [news, setNews] = useState();

    const { id } = useParams();

    const onenews = useLoaderData();
    console.log(onenews);

    useEffect(() => {
        const findNews = onenews?.find((news) => news._id == id);
        console.log("Find:",findNews);
        setNews(findNews);
    }, [id, onenews])
    // const findNews = onenews?.find((news) => news._id === id);
    // setNews(findNews);
    //console.log(setNews.findNews);

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    
                    <SingleNewsCard news={news}></SingleNewsCard>
                </div>

                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default SingleNews;