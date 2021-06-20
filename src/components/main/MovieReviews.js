import React from 'react'

const MovieReviews = ({ movie }) => {
    console.log(movie)
    return (
        <div className="all-reviews">
            <h2>Reviews</h2>
            {movie.reviews.map((review, i) => {
                if (review.review != null)
                    return (
                        <div key={i} className="review">
                            <div className="review-header">
                                <div className="review-author">{review.review.author} - </div>
                                <div className="review-rating">
                                    {review.review.rating}
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="review-description">{review.review.description}</div>
                        </div>
                    )
                return <div>No Reviews</div>
            })}
        </div>
    )
}

export default MovieReviews
