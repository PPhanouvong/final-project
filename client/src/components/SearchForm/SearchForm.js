import React, { Component } from "react";
import './SearchForm.css';
import { Tabs, Tab } from 'react-materialize';

const axios = require("axios");

class SearchForm extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    platform: "",
    r6casualdeaths: "",
    r6casualkills: "",
    r6casualkd: "",
    r6casualwins: "",
    r6casuallosses: "",
    r6casualwlr: "",
    r6overallassists: "",
    r6overallbarricades_built: "",
    r6overallbullets_fired: "",
    r6overallbullets_hit: "",
    r6overallheadshots: "",
    r6overallmelee_kills: "",
    r6overallpentration_kills: "",
    r6overallreinforcements_deployed: "",
    r6overallrevives: "",
    r6overallsteps_moved: "",
    r6overallsuicides: "",
    r6progressionlevel: "",
    r6progressionxp: "",
    r6rankeddeaths: "",
    r6rankedkd: "",
    r6rankedkills: "",
    r6rankedlosses: "",
    r6rankedplaytime: "",
    r6rankedwins: "",
    r6rankedwlr: "",
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();

    axios.get("https://api.r6stats.com/api/v1/players/" + this.state.username + "/?platform=" + this.state.platform)
      .then(response => {
        // console.log(response.data.player.stats);

        this.setState({
          r6casualdeaths: response.data.player.stats.casual.deaths,
          r6casualkills: response.data.player.stats.casual.kills,
          r6casualkd: response.data.player.stats.casual.kd,
          r6casualwins: response.data.player.stats.casual.wins,
          r6casuallosses: response.data.player.stats.casual.losses,
          r6casualwlr: response.data.player.stats.casual.wlr,
          r6overallassists: response.data.player.stats.overall.assists,
          r6overallbarricades_built: response.data.player.stats.overall.barricades_built,
          r6overallbullets_fired: response.data.player.stats.overall.bullets_fired,
          r6overallbullets_hit: response.data.player.stats.overall.bullets_hit,
          r6overallheadshots: response.data.player.stats.overall.headshots,
          r6overallmelee_kills: response.data.player.stats.overall.melee_kills,
          r6overallpentration_kills: response.data.player.stats.overall.penetration_kills,
          r6overallreinforcements_deployed: response.data.player.stats.overall.reinforcements_deployed,
          r6overallrevives: response.data.player.stats.overall.revives,
          r6overallsteps_moved: response.data.player.stats.overall.steps_moved,
          r6overallsuicides: response.data.player.stats.overall.suicides,
          r6progressionlevel: response.data.player.stats.progression.level,
          r6progressionxp: response.data.player.stats.progression.xp,
          r6rankeddeaths: response.data.player.stats.ranked.deaths,
          r6rankedkd: response.data.player.stats.ranked.kd,
          r6rankedkills: response.data.player.stats.ranked.kills,
          r6rankedlosses: response.data.player.stats.ranked.losses,
          r6rankedplaytime: response.data.player.stats.ranked.playtime,
          r6rankedwins: response.data.player.stats.ranked.wins,
          r6rankedwlr: response.data.player.stats.ranked.wlr
        })
        // console.log(this.state.r6data)
      })

  };

  render() {
    return (
      <div>
        <form>
          <input
            id='stats'
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            id='stats'
            type="text"
            placeholder="Platform (UPLAY, XONE, PS4)"
            name="platform"
            value={this.state.platform}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <Tabs className='grey-text tabs tabs-fixed-width tab-demo z-depth-20' id="uncontrolled-tab-example">
          <Tab title="Casual">
            Kills: {this.state.r6casualkills}
            <br></br>
            Deaths: {this.state.r6casualdeaths}
            <br></br>
            KD: {this.state.r6casualkd}
            <br></br>
            Wins: {this.state.r6casualwins}
            <br></br>
            Losses: {this.state.r6casuallosses}
            <br></br>
            WLR: {this.state.r6casualwlr}
            <br></br>
          </Tab>
          
          <Tab title="Ranked">
            Kills: {this.state.r6rankedkills}
            <br></br>
            Deaths: {this.state.r6rankeddeaths}
            <br></br>
            KD: {this.state.r6rankedkd}
            <br></br>
            Wins: {this.state.r6rankedwins}
            <br></br>
            Losses: {this.state.r6rankedlosses}
            <br></br>
            WLR: {this.state.r6rankedwlr}
          </Tab>

          <Tab title="Overall">
            assists: {this.state.r6overallassists}
            <br></br>
            barricades built: {this.state.r6overallbarricades_built}
            <br></br>
            bullets fired: {this.state.r6overallbullets_fired}
            <br></br>
            bullets hit: {this.state.r6overallbullets_hit}
            <br></br>
            headshots: {this.state.r6overallheadshots}
            <br></br>
            melee kills: {this.state.r6overallmelee_kills}
            <br></br>
            pentration kills: {this.state.r6overallpentration_kills}
            <br></br>
            reinforcements deployed: {this.state.r6overallreinforcements_deployed}
            <br></br>
            revives: {this.state.r6overallrevives}
            <br></br>
            steps moved: {this.state.r6overallsteps_moved}
            <br></br>
            suicides: {this.state.r6overallsuicides}
          </Tab>
        </Tabs>;
      </div>
    );
  }
}

export default SearchForm;