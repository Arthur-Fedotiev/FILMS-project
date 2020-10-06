import React, {Component} from "react";
import {prop, sortWith, ascend, descend} from "ramda";
import FilmsList from "pages/FilmsPage/components/FilmsList";
import FilmContext from "contexts/FilmContext";
import {films} from "data";

class App extends Component {
  componentDidMount() {
    this.setState({films: this.sortFilms(films)});
  }

  sortFilms = films =>
    sortWith([descend(prop("featured")), ascend(prop("title"))], films);

  toggleFeatured = id =>
    this.setState(({films}) => ({
      films: this.sortFilms(
        films.map(f => (f._id === id ? {...f, featured: !f.featured} : f)),
      ),
    }));

  state = {
    films: [],
    toggleFeatured: this.toggleFeatured,
  };

  render() {
    const {films} = this.state;
    return (
      <FilmContext.Provider value={this.state}>
        <div className="ui container mt-3">
          <FilmsList films={films} />
        </div>
      </FilmContext.Provider>
    );
  }
}

export default App;
