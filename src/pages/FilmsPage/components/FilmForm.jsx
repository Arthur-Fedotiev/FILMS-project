import React, {Component, createRef} from "react";
import ImageLoader from "components/ImageLoader";
import FormMessage from "components/FormMessage";
import PropTypes from "prop-types";

const initialData = {
  title: "",
  img: "",
  description: "",
  director: "",
  price: "",
  duration: "",
  featured: false,
};

class FilmForm extends Component {
  state = {
    data: initialData,
    error: {},
  };

  photoRef = createRef();

  updatePhoto = e => {
    const file = this.photoRef.current.files && this.photoRef.current.files[0];
    if (file) {
      let filePath = "/img/" + file.name;
      this.setState({
        error: {...this.state.error, img: ""},
        data: {...this.state.data, img: filePath},
      });
    }
  };

  handlStringChange = e =>
    this.setState({
      error: {...this.state.error, [e.target.name]: ""},
      data: {...this.state.data, [e.target.name]: e.target.value},
    });

  handleNumberChange = e => {
    let value = parseFloat(e.target.value);
    value = isNaN(value) || value === 0 ? "" : Math.abs(value);
    this.setState({
      error: {...this.state.error, [e.target.name]: ""},
      data: {...this.state.data, [e.target.name]: value},
    });
  };

  handleCheckboxChange = e =>
    this.setState({
      data: {...this.state.data, [e.target.name]: e.target.checked},
    });

  validate = data => {
    const errors = {};
    if (!data.title) errors.title = "This field cannot be empty";
    if (!data.img) errors.img = "This field cannot be empty";
    if (!data.description) errors.description = "This field cannot be empty";
    if (!data.director) errors.director = "This field cannot be empty";
    if (!data.price) errors.price = "This field cannot be empty";
    if (!data.duration) errors.duration = "This field cannot be empty";
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({error: errors});
    // console.log(this.state.error);
    if (Object.keys(errors) === 0) {
      this.setState({data: initialData});
    } else {
      console.log(this.state.data);
    }
  };

  render() {
    const {data, error} = this.state;
    const {hideForm} = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="ui grid mb-3">
          {/* two column START */}
          <div className="two column row">
            <div className="ten wide column">
              {/*  title START */}
              <div className={`field ${error.title && "error"}`}>
                <label htmlFor="title">Film title</label>
                <input
                  value={data.title}
                  onChange={this.handlStringChange}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="film title"
                />
                {error.title && (
                  <FormMessage type="error">{error.title}</FormMessage>
                )}
              </div>
              {/*  title END */}
              {/*  img field END */}
              <div className={`field img-grid ${error.img && "error"}`}>
                <label htmlFor="img">Image</label>
                <input
                  name="img"
                  value={data.img}
                  onChange={this.handlStringChange}
                />
                {error.img && (
                  <FormMessage type="error">{error.img}</FormMessage>
                )}
                <div className="inp-file">
                  <label htmlFor="photo">Photo</label>
                  <input
                    ref={this.photoRef}
                    onChange={this.updatePhoto}
                    type="file"
                    id="photo"
                  />
                </div>
              </div>
              {/*  img field END */}
            </div>
            <div className="six wide column">
              <ImageLoader
                src={data.img}
                fallbackImg="http://via.placeholder.com/250x250"
                className="ui image imgfit"
                alt="the fake"
              />
            </div>
          </div>
          {/* two column END */}
          {/* description START */}
          <div className={`column row field ${error.description && "error"}`}>
            <label htmlFor="description">Film description</label>
            <textarea
              value={data.description}
              onChange={this.handlStringChange}
              name="description"
              id="description"
              placeholder="film description"
            ></textarea>
            {error.description && (
              <FormMessage type="error">{error.description}</FormMessage>
            )}
          </div>
          {/* description END */}
          <div className="three column row">
            {/* director START */}
            <div className={`column field ${error.director && "error"}`}>
              <label htmlFor="director">Director</label>
              <input
                value={data.director}
                onChange={this.handlStringChange}
                type="text"
                name="director"
                id="director"
                placeholder="film director"
              />
              {error.director && (
                <FormMessage type="error">{error.director}</FormMessage>
              )}
            </div>
            {/* director END */}

            {/* duration START */}
            <div className={`column field ${error.duration && "error"}`}>
              <label htmlFor="duration">Duration</label>
              <input
                value={data.duration}
                onChange={this.handleNumberChange}
                type="number"
                name="duration"
                id="duration"
                placeholder="Duration"
              />
              {error.duration && (
                <FormMessage type="error">{error.duration}</FormMessage>
              )}
            </div>
            {/* duration END */}

            {/* price START */}
            <div className={`column field ${error.price && "error"}`}>
              <label htmlFor="price">Price</label>
              <input
                value={data.price}
                onChange={this.handleNumberChange}
                type="number"
                name="price"
                id="price"
                placeholder="price"
              />
              {error.price && (
                <FormMessage type="error">{error.price}</FormMessage>
              )}
            </div>
            {/* price END */}
          </div>

          <div className="six wide column inline field">
            <label htmlFor="featured">Featured</label>
            <input
              value={data.featured}
              onChange={this.handleCheckboxChange}
              type="checkbox"
              name="featured"
              id="featured"
            />
          </div>
        </div>
        {/* ui grid  */}
        <div className="ui fluid buttons">
          <button className="ui button primary" type="submit">
            Save
          </button>
          <div className="or"></div>
          <span onClick={hideForm} className="ui button">
            Hide form
          </span>
        </div>
      </form>
    );
  }
}

FilmForm.propTypes = {
  hideForm: PropTypes.func.isRequired,
};

export default FilmForm;
