import React, { lazy, Suspense } from "react";

import { About } from "./AboutInfo";
import Home from "./Home";

import { Route, Switch } from "react-router-dom";
import StateInfo from "./StateInfo";

import News from "./news";

const Precautions = lazy(() => import("./Precautions"));
const Navbar = lazy(() => import("./navbar"));

const renderLoader = () => <p>Loading</p>;
class App extends React.Component {
  state = {
    india: [],
    statewise: [],
    tested: [],
    states_tested_data: [],
    districtwise: [],
    zones: [],
    statePopulationData: [],
    default: "India",
    darkMode: JSON.parse(localStorage.getItem("darkMode")),
  };

  constructor() {
    super();
    this.getStateTestData = this.getStateTestData.bind(this);
  }

  async componentDidMount() {
    console.log("here", navigator.onLine);
    var data = require("./sample json/data.json");

    let z = require("./sample json/zones.json");
    let results = require("./sample json/state_district_wise.json");
    var result = {
      data: results.map((d) => d),
    };

    var zones = z.zones;

    var states_tested_data = require("./sample json/state_test_data.json");

    states_tested_data = states_tested_data["states_tested_data"];

    if (navigator.onLine) {
      /*var { data } = await axios.get("https://api.covid19india.org/data.json");
      console.log("data", data);
      var {
        data: { zones },
      } = await axios("https://api.covid19india.org/zones.json");

      var result = await axios(
        "https://api.covid19india.org/v2/state_district_wise.json"
      );

      var {
        data: { states_tested_data },
      } = await axios("https://api.covid19india.org/state_test_data.json"); */
    } else {
      data = require("./sample json/data.json");

      let z = require("./sample json/zones.json");
      let results = require("./sample json/state_district_wise.json");
      result = {
        data: results.map((d) => d),
      };

      zones = z.zones;

      states_tested_data = require("./sample json/state_test_data.json");
    }

    const { statewise } = data;

    const india = statewise.filter((s) => s.statecode === "TT")[0];
    const s = statewise.filter((s) => s.statecode !== "TT");

    const tested = data.tested[data.tested.length - 1];

    this.setState({
      statewise: s,
      districtwise: result.data,
      india,
      tested,
      zones,
      states_tested_data,
    });
  }

  componentDidUpdate() {
    localStorage.setItem("darkMode", this.state.darkMode);
    if (this.state.darkMode) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  }

  getStateTestData(code) {
    if (navigator.onLine) {
      var d = this.state.statewise.filter((st) => st.statecode === code);
      var name = d[0] === undefined ? "" : d[0].state;

      var result =
        this.state.states_tested_data &&
        this.state.states_tested_data.filter((d) => d.state === name);

      let one = { ...result[0] };

      let two = { ...result[result.length - 1] };
      let third = { ...two };
      third.populationncp2019projection = one.populationncp2019projection;
      return third;
    } else {
      if (this.state.statewise.length !== 0) {
        d = this.state.statewise.filter((st) => st.statecode === code);
        name = d[0] === undefined ? "" : d[0].state;

        var { states_tested_data } = this.state.states_tested_data;

        result = states_tested_data.filter((d) => d.state === name);

        return result[result.length - 2];
      }
    }
  }

  modeChanger = () => {
    this.setState((prevstate) => ({
      darkMode: !prevstate.darkMode,
    }));
  };

  render() {
    console.log(this.state.statewise);
    return (
      <React.Fragment>
        <div>
          <Navbar mode={this.state.darkMode} modeChange={this.modeChanger} />

          <div className="content">
            <Switch>
              <Route path="/about">
                <Suspense fallback={renderLoader()}>
                  <About />
                </Suspense>
              </Route>
              <Route path="/precautions">
                <Suspense fallback={renderLoader()}>
                  <Precautions />
                </Suspense>
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route
                path="/state/:code?"
                component={(props) => (
                  <StateInfo
                    zones={this.state.zones}
                    getStateTestData={(code) => this.getStateTestData(code)}
                    statewise={this.state.statewise}
                    districtwise={this.state.districtwise}
                    {...props}
                  />
                )}
              />

              <Route exact path="/">
                <Home data={this.state} />
              </Route>
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
