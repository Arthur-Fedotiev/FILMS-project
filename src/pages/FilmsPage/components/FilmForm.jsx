import React, {Component} from "react";
import ImageLoader from "components/ImageLoader";

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
  };

  handlStringChange = e =>
    this.setState({
      data: {...this.state.data, [e.target.name]: e.target.value},
    });

  handleNumberChange = e => {
    let value = parseFloat(e.target.value);
    value = isNaN(value) || value === 0 ? "" : Math.abs(value);
    this.setState({
      data: {...this.state.data, [e.target.name]: value},
    });
  };

  handleCheckboxChange = e =>
    this.setState({
      data: {...this.state.data, [e.target.name]: e.target.checked},
    });

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.data);
  };

  render() {
    const {data} = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="ui grid mb-3">
          {/* two column START */}
          <div className="two column row">
            <div className="ten wide column">
              {/*  title START */}
              <div className="field">
                <label htmlFor="title">Film title</label>
                <input
                  value={data.title}
                  onChange={this.handlStringChange}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="film title"
                />
              </div>
              {/*  title END */}
              {/*  img field END */}
              <div className="field img-grid">
                <label htmlFor="img">Image</label>
                <input
                  name="img"
                  value={data.img}
                  onChange={this.handlStringChange}
                />
                <div className="inp-file">
                  <label htmlFor="photo">Photo</label>
                  <input type="file" id="photo" />
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
          <div className="column row field">
            <label htmlFor="description">Film description</label>
            <textarea
              value={data.description}
              onChange={this.handlStringChange}
              name="description"
              id="description"
              placeholder="film description"
            ></textarea>
          </div>
          {/* description END */}
          <div className="three column row">
            {/* director START */}
            <div className="column field">
              <label htmlFor="director">Director</label>
              <input
                value={data.director}
                onChange={this.handlStringChange}
                type="text"
                name="director"
                id="director"
                placeholder="film director"
              />
            </div>
            {/* director END */}

            {/* duration START */}
            <div className="column field">
              <label htmlFor="duration">Duration</label>
              <input
                value={data.duration}
                onChange={this.handleNumberChange}
                type="number"
                name="duration"
                id="duration"
                placeholder="Duration"
              />
            </div>
            {/* duration END */}

            {/* price START */}
            <div className="column field">
              <label htmlFor="price">Price</label>
              <input
                value={data.price}
                onChange={this.handleNumberChange}
                type="number"
                name="price"
                id="price"
                placeholder="price"
              />
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
          <span className="ui button">Hide form</span>
        </div>
      </form>
    );
  }
}
export default FilmForm;
