import React from 'react';

const SingleNewsCard = ({ news }) => {
    const { image_url, title, details } = news || {};
    return (
        <div>
            <div className="card bg-base-100 px-2">
                <figure><img className='w-full' src={image_url} alt="" /></figure>
                <div className="cardbody pb-10">
                    <h2 className="card-title text-4xl font-bold pb-3 capitalize">{title}</h2>
                    <p className='text-base'>{details}</p>
                </div>
            </div>

        </div>
    );
};

export default SingleNewsCard;