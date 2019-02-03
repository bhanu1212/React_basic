import React, { Component } from "react";

const formInitialize = {
  title: "Mr.",
  name: "",
  message: "",
  rememberMe: false,
  password: "",
  nameError: "",
  passwordError: ""
};
class MyForms extends Component {
  state = formInitialize;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
    console.log(event.target.value);
  };

  validate = () => {
    // let nameError = "";

    // if (!this.state.name.includes("INFY")) {
    //   nameError = "invalid name format";
    // }
    // if (nameError) {
    //   this.setState({ nameError });
    //   return false;
    // }
    let passwordError = "";
    if (this.state.password.length < 6) {
      passwordError = "invalid password format";
    }
    if (passwordError) {
      this.setState({ passwordError });
      return false;
    }
    return true;
  };
  // handleChangeTextArea = event => {
  //   this.setState({ message: event.target.value });
  //   console.log(event.target.value);
  // };
  // handleChangeTitle = event => {
  //   this.setState({ title: event.target.value });
  //   console.log(event.target.value);
  // };
  // handleCheck = event => {
  //   this.setState({ remeberme: event.target.checked });
  //   console.log(event.target.checked);
  // };
  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(formInitialize);
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <div className="m-2">
                <select
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                >
                  <option>Mr.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
                </select>
              </div>

              <div className="m-2">
                <input
                  name="name"
                  placeholder="your name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.nameError}
                </div>
              </div>
              <div className="m-2">
                <textarea
                  name="message"
                  placeholder="your message"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </div>

              <div className="m-2">
                <label>Remember me </label>
                <input
                  name="rememberMe"
                  className="m-2"
                  type="checkbox"
                  checked={this.state.rememberMe}
                  onChange={this.handleChange}
                />
              </div>
              <div className="m-2">
                <input
                  name="password"
                  placeholder="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.passwordError}
                </div>
              </div>
              <div className="m-2">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default MyForms;
