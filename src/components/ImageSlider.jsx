import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class ImageSlider extends Component {
  state = {
    imgs: [
      "./images/NYC_black.jpg",
      "./images/NYC.png",
      "./images/wallpaper8.jpg"
    ],
    idx: 0
  };

  handleNext = () => {
    if (this.state.idx < this.state.imgs.length - 1)
      this.setState({ idx: this.state.idx + 1 });
  };
  handlePrevious = () => {
    if (this.state.idx > 0) this.setState({ idx: this.state.idx - 1 });
  };
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.handlePrevious}
          className="btn btn-primary btn-sm"
        >
          previous
        </button>

        <img
          className="m-2"
          style={{ width: 900, height: 100 }}
          src={this.state.imgs[this.state.idx]}
          alt="images"
        />
        <button onClick={this.handleNext} className="btn btn-primary btn-sm">
          next
        </button>
      </React.Fragment>
    );
  }
}

export default ImageSlider;
