import React, { useState } from "react";
import MovieRating from "./MovieRating";

//Shows details for the selected movie and provides options for rating and comments

const MovieDetail = ({ movie, onClose }) => {
    const [comments, setComments] = useState(movie.comments || []);

    const addComment = (newComment) => {
        setComments([...comments, newComment]);
    };

    return (
        <div>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <MovieRating movie={movie} onComment={addComment} />
            <button onClick={onClose}>Close</button>
            <h4>Comments:</h4>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    );

};

export default MovieDetail;
