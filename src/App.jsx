import React, {Component} from "react";
import {prop, sortWith, ascend, descend} from "ramda";
import {generate as id} from "shortid";
import FilmsList from "pages/FilmsPage/components/FilmsList";
import FilmForm from "pages/FilmsPage/components/FilmForm";
import FilmContext from "contexts/FilmContext";
import {films} from "data";
import TopNavigation from "components/TopNavigation";
import LoginForm from "components/LoginForm";

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

  showForm = e => {
    this.setState({showAddForm: true, selectedFilm: {}});
  };
  hideForm = e => {
    this.setState({showAddForm: false, selectedFilm: {}});
  };

  addFilm = film =>
    this.setState(state => ({
      films: this.sortFilms([...this.state.films, {_id: id(), ...film}]),
      selectedFilm: {},
      showAddForm: false,
    }));

  updateFilm = film =>
    this.setState(state => ({
      films: this.sortFilms(
        this.state.films.map(f => (f._id === film._id ? film : f)),
      ),
      selectedFilm: {},
      showAddForm: false,
    }));

  saveFilm = film => (film._id ? this.updateFilm(film) : this.addFilm(film));

  selectedFilmForEdit = film => {
    this.setState({selectedFilm: film, showAddForm: true});
  };
  state = {
    films: [],
    toggleFeatured: this.toggleFeatured,
    showAddForm: false,
    selectedFilm: {},
    selectedFilmForEdit: this.selectedFilmForEdit,
  };

  render() {
    const {films, showAddForm, selectedFilm} = this.state;
    const cols = showAddForm ? "ten" : "sixteen";
    return (
      <FilmContext.Provider value={this.state}>
        <div className="ui container mt-3">
          <TopNavigation showForm={this.showForm} />
          <LoginForm />
          {/*  <div className="ui stackable grid">
            {showAddForm && (
              <div className="six wide column">
                <FilmForm
                  film={selectedFilm}
                  saveFilm={this.saveFilm}
                  hideForm={this.hideForm}
                />
              </div>
            )}
            <div className={`${cols} wide column`}>
              <FilmsList films={films} />
            </div>
          </div>
       */}
        </div>
      </FilmContext.Provider>
    );
  }
}

export default App;
