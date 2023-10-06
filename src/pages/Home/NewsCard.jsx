import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ allnews }) => {
    const { image_url, title, details, _id } = allnews;
    return (
        <div className="card card-compact bg-base-100 shadow-xl mb-16">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200
                    ? <p>{details.slice(0,200)} 
                    <Link to={`/news/${_id}`}
                    className='text-blue-700 font-bold'> Read More....</Link>
                    </p>
                    : <p>{details}</p>
                }
                
            </div>
        </div>
    );
};

export default NewsCard;