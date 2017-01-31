const React = require('react');
const MovieReviews = require('../components/MovieReviews')
const { fetch } = require('whatwg-fetch');

class LatestMovieReviewsContainer extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      reviews: []
    }
  }

  componentWillMount(){
    this.fetchReviews();
  }

  fetchReviews(){
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json')
      .then(res => res.json())
      .then(response => this.setState({reviews: response.results}))
  }

  render(){
    const {reviews} = this.state

    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={reviews}/>
      </div>
    );
  }
}

module.exports = LatestMovieReviewsContainer;