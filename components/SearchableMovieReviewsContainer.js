const React = require('react');
const MovieReviews = require('../components/MovieReviews')
const { fetch } = require('whatwg-fetch');

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reviews: []
    }
  }

  render(){
    const {reviews} = this.state
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={reviews}/>
      </div>
    )
  }
}

module.exports = SearchableMovieReviewsContainer;
