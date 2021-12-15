// import logo from "./logo.svg";
// import "./App.css";

import React from "react";
import { Cards, Chart, Country } from "./Components";
import styles from "./App.module.css";
import { fetchdata } from "./api";
import coronaimages from "./images/image.png"

class App extends React.Component {
  state = {
    data: {},
    Country: "",
  };
  async componentDidMount() {
    const fetcheddata = await fetchdata();

    this.setState({ data: fetcheddata });
  }

  handleCountryChange = async (country) => {
    const fetcheddata = await fetchdata(country);

    this.setState({ data: fetcheddata, country: country });
  };
  render() {
    const { data , country} = this.state;
    return (
      <div className={styles.container}>
      <img className={styles.image} src={coronaimages} alt="COVID-19"/>
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
