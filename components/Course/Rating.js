import React from 'react';

const Rating = ({ rating }) => {
    const bgRatingAll = ['bg-red-400', ' bg-orange-400', 'bg-yellow-400', 'bg-lime-400', ' bg-green-400']
    const bgRating = bgRatingAll.slice(0, rating)
    return (
        <div className="rating gap-1">
            <input
                disabled="true"
                type="radio" name="rating-3"
                className={"mask mask-star-2 " + bgRating[0]}
            />

            <input
                disabled="true"
                type="radio"
                name="rating-3"
                className={"mask mask-star-2 " + bgRating[1]}

                checked
            />
            <input
                disabled="true"
                type="radio"
                name="rating-3"
                className={"mask mask-star-2 " + bgRating[2]} />
            <input
                checked
                disabled="true"
                type="radio"
                name="rating-3"
                className={"mask mask-star-2 " + bgRating[3]} />
            <input
                disabled="true"
                type="radio"
                name="rating-3"
                className={"mask mask-star-2 " + bgRating[4]} />
        </div>
    );
};

export default Rating;