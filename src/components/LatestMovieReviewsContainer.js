import React, {
  Component
} from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '7b3a605d0ebc4d708c54f350efe5bf1d';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: []
    }

  }

  componentWillMount() {
    fetch(URL)
      .then(resp => resp.json())
      .then(resp => this.setState({
        reviews: resp.results
      }))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h2>The Latest Reviews:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }


}
