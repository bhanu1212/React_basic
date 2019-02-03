import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movies from "./components/Movies";
import ImageSlider from "./components/ImageSlider";
import MyForms from "./components/MyForms";
import FetchRandomUsers from "./components/FetchRandomUsers";

class App extends Component {
  state = {
    visible: true
  };

  handleHide = () => {
    this.setState({ visible: this.state.visible ? false : true });
  };
  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col">
            <MyForms />
          </div>
          <div className="col">
            <FetchRandomUsers />
          </div>
        </div>

        {/* <Movies title="IMDB movie" />
        <Movies title="RTN TOM movie" rank={9} /> */}
        {this.state.visible ? <ImageSlider /> : null}
        <div>
          <button
            onClick={this.handleHide}
            className="badge badge-primary rounded mx-auto d-block col-6 col-md-1 btn-sm"
          >
            {this.state.visible ? "Hide" : "Unhide"}
          </button>
        </div>
      </main>
    );
  }
}

export default App;
