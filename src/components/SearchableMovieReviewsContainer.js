// Code SearchableMovieReviewsContainer Here
import React, {
  Component
} from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
const NYT_API_KEY = '7b3a605d0ebc4d708c54f350efe5bf1d';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`



// Code LatestMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    }

  }

  handleSearchInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL.concat(this.state.query))
      .then(resp => resp.json())
      .then(resp => this.setState({
        reviews: resp.results
      }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleSearchInputChange}></input>
          <input type='submit'></input>
        </form>
        <h2>Search Results:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }


}
