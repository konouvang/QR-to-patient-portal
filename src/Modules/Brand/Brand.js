import React, { Component } from "react";

class Brand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
    };
  }

  componentDidMount() {
    this.fetchUrl();
  }

  fetchUrl() {
    fetch("http://localhost:3000/data/1")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.attributes.publicUrl,
        });
      });
  }

  render() {
    var url = this.state;
    return (
      <>
        <img src={url.items} width={350} />
      </>
    );
  }
}

export default Brand;
