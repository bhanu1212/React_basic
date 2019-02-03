import React, { Component } from "react";

class FetchRandomUsers extends Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "https://randomuser.me/api/?results=3";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
    //console.log(data.results[0]);
  }
  render() {
    if (this.state.loading) {
      return <div>Loading....</div>;
    }
    if (!this.state.people.length) {
      return <div>Didn't find any person !</div>;
    }
    return (
      <div>
        {this.state.people.map(person => (
          <div className="row" key={person.login.uuid}>
            <div>
              <img
                className="rounded mx-auto d-block"
                src={person.picture.large}
              />
            </div>
            <div className="col">
              <div>Title: {person.name.title}</div>
              <div>First Name: {person.name.first}</div>
              <div>Last Name: {person.name.last}</div>
              <div>Email: {person.email}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default FetchRandomUsers;
