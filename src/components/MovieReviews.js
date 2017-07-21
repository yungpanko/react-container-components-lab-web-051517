// Code MovieReviews Here
import React from 'react'

const Review = ({
  headline,
  summary_short,
  link,
  display_title
}) => {
  return <div className='review'>
    <a href={link.url}><h3>{headline}</h3></a>
    <p>{summary_short}</p>
    <p>{display_title}</p>
  </div>
}

const MovieReviews = ({
  reviews
}) => {
  return <div className='review-list'>
    {reviews.map(Review)}
  </div>
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
