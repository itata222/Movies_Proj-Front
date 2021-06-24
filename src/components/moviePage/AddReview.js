import React, { useState } from 'react'
import { addReviewFunc } from '../../services/userService'
import Modal from '../main/Modal';

const AddReview = (props) => {

    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(5);
    const [showModal, setShowModal] = useState(false);

    const submitAddReview = (e) => {
        e.preventDefault();
        const review = { author, description, rating }
        addReviewFunc(review, props.movieID).then((res) => {
            setShowModal(true)
        }).catch((e) => console.log(e.message))
    }

    const authorBlur = (e) => {
        const theAuthor = e.target.value.trim();
        setAuthor(theAuthor)
    }
    const descriptionBlur = (e) => {
        const thedDescription = e.target.value.trim();
        setDescription(thedDescription)
    }
    const ratingBlur = (e) => {
        const theRating = e.target.value;
        setRating(theRating)
    }

    return (
        <div className="addReview">
            <h2 className="addReview-header">Add a Review</h2>                        {showModal && <Modal text="Show Updated" setShowModal={setShowModal} />}
            {showModal && <Modal text="Your Review was Added" setShowModal={setShowModal} />}
            <form onSubmit={submitAddReview} className="add-review">
                <input className="review-add-author" type="text" placeholder="Author" onBlur={authorBlur} />
                <input className="review-add-description" type="textarea" placeholder="Review Description..." onBlur={descriptionBlur} />
                <input className="review-add-rating" type="number" min="1" max="5" placeholder="Rating 1-10" onBlur={ratingBlur} />
                <button>Send !</button>
            </form>
        </div>
    )
}

export default AddReview
