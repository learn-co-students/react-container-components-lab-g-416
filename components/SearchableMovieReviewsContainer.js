const React = require('react');
const MovieReviews = require('../components/MovieReviews');
const SearchInput = require('../components/SearchInput');

const { fetch } = require('whatwg-fetch');

const NYT_API_KEY = '09635c65d1fd40fba804f62e78507db0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      reviews: []
    };

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchInputChange(ev){
    this.setState({searchTerm: ev.target.value});
  }

  handleSubmit(ev){
    ev.preventDefault();

    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  }

  render(){
    const {reviews} = this.state

    return (
      <div className="searchable-movie-reviews">
        <SearchInput 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleSearchInputChange}
        />
        <MovieReviews reviews={reviews}/>
      </div>
    );
  }
}

module.exports = SearchableMovieReviewsContainer;
