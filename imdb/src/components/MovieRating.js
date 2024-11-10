import React, { useState } from "react";

//Allows users to rate and leave comments on the selected movie

const MovieRating = ({ movie, onComment }) => {
    //rating and comment values are brought from state
    const [rating, setRating] = useState(movie.rating);
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); //it ensures to prevent the default behave of the form, it means this page doesn't refresh.
        onComment(comment);
        setComment("");
    };

    return (
        <div>
            <h4>Rate this movie</h4>
            <p>Current rating: {rating}</p>

            <input
                type="number"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                min="1"
                max="5"
            />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Add a comment..."
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default MovieRating;