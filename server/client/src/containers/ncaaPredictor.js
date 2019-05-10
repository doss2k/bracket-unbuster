import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllTeams, fetchTeam1Stats, fetchTeam2Stats } from '../actions/teams';

const tf = require('@tensorflow/tfjs');
const defaultLogo = 'https://miro.medium.com/max/480/1*0iD-PD-u-9-Kmd_6TakeEw.png';

class NCAAPredictor extends Component {
  
  componentDidMount() {
    this.props.fetchAllTeams();
  }

  state = {
    team1: '',
    team2: '',
    team1logo: '' || defaultLogo,
    team2logo: '' || defaultLogo,
    team1versus2: [],
    team2versus1: [],
    team1PredictedScore: 0,
    team2PredictedScore: 0
  }
  
  onInputChangeTeam1 = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    const team1Clicked = this.props.teams.find(team => team.TeamName === event.target.value);
    if (team1Clicked.logoUrl == null) {
      this.setState({team1logo: defaultLogo})
    } else {
    this.setState({team1logo: team1Clicked.logoUrl})
    }
  }

  onInputChangeTeam2 = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    const team2Clicked = this.props.teams.find(team => team.TeamName === event.target.value);
    if (team2Clicked.logoUrl == null) {
      this.setState({team2logo: defaultLogo})
    } else {
    this.setState({team2logo: team2Clicked.logoUrl})
    }
  }
     
  handlePrediction = async (event) => {
    await this.props.fetchTeam1Stats(this.state.team1);
    await this.props.fetchTeam2Stats(this.state.team2);
    this.processStats();
  }

  processStats = async () => {
    let team1versus2 = [];
    let team2versus1 = [];

    team1versus2.push(
      this.props.team1stats[0].AdjTempo, 
      this.props.team1stats[0].AdjOE,
      this.props.team1stats[0].OffeFGPct,
      this.props.team1stats[0].OffTOPct,
      this.props.team1stats[0].OffORPct,
      this.props.team1stats[0].OffFTRate,
      this.props.team2stats[0].AdjTempo, 
      this.props.team2stats[0].AdjDE,
      this.props.team2stats[0].DefeFGPct,
      this.props.team2stats[0].DefTOPct,
      this.props.team2stats[0].DefORPct,
      this.props.team2stats[0].DefFTRate
    )

    team2versus1.push(
      this.props.team2stats[0].AdjTempo, 
      this.props.team2stats[0].AdjOE,
      this.props.team2stats[0].OffeFGPct,
      this.props.team2stats[0].OffTOPct,
      this.props.team2stats[0].OffORPct,
      this.props.team2stats[0].OffFTRate,
      this.props.team1stats[0].AdjTempo, 
      this.props.team1stats[0].AdjDE,
      this.props.team1stats[0].DefeFGPct,
      this.props.team1stats[0].DefTOPct,
      this.props.team1stats[0].DefORPct,
      this.props.team1stats[0].DefFTRate
    )
    this.setState({team1versus2, team2versus1});
    this.makePrediction();
  }

  makePrediction = async () => {
    const model = await tf.loadLayersModel('http://bracket-unbuster.herokuapp.com/model.json');
    const team1PredictedScore = await model.predict(tf.tensor(this.state.team1versus2, [1, 12])).data();
    const team2PredictedScore = await model.predict(tf.tensor(this.state.team2versus1, [1, 12])).data();
    this.setState({team1PredictedScore, team2PredictedScore});
  }

  render() {
    if(!this.props.teams) {
      return('Loading....')
    }

    return (
      <div className="container">        
        <div className="row justify-content-center">
            <div className="col-md-4">
              <select
                className="form-control"
                value={this.state.team1}
                onChange={this.onInputChangeTeam1}                
                name="team1"
                style={{marginTop: 25}}
              >
                <option value="default" style={{display: 'none'}}>Select Team 1</option>
                <optgroup label="NCAA Tournament Teams">
                  {this.props.teams.filter(team => (team.InTournament === "Yes")).map(team => ( 
                    <option
                      key={team.TeamName}
                      value={team.TeamName}
                      name={team.TeamName}
                    >
                      {team.TeamName}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="All Other Teams">
                  {this.props.teams.filter(team => (team.InTournament !== "Yes")).map(team => ( 
                    <option
                      key={team.TeamName}
                      value={team.TeamName}
                      name={team.TeamName}
                    >
                      {team.TeamName}
                    </option>
                  ))}
                </optgroup>
              </select>
              <img style={{marginTop: 25}} className="teamLogo img-fluid" src={this.state.team1logo} alt="Team 1" />
              <h2 className="text-center" style={{color: 'white', marginTop: 20}}>Score: {Math.round(this.state.team1PredictedScore)} </h2>
            </div>
            <div className="col-md-4 text-center">            
              <button 
                className="btn btn-primary btn-lg" 
                type="button" onClick={this.handlePrediction} 
                style={{marginTop: 215}} 
                disabled={this.state.team1 === this.state.team2}>
                Predict
              </button>
            </div>
            <div className="col-md-4">
              <select
                className="form-control"
                value={this.state.team2}
                onChange={this.onInputChangeTeam2}
                name="team2"
                style={{marginTop: 25}}
              >
                <option value="default" style={{display: 'none'}}>Select Team 2</option>
                <optgroup label="NCAA Tournament Teams">
                  {this.props.teams.filter(team => (team.InTournament === "Yes")).map(team => ( 
                    <option
                      key={team.TeamName}
                      value={team.TeamName}
                      name={team.TeamName}
                    >
                      {team.TeamName}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="All Other Teams">
                  {this.props.teams.filter(team => (team.InTournament !== "Yes")).map(team => ( 
                    <option
                      key={team.TeamName}
                      value={team.TeamName}
                      name={team.TeamName}
                    >
                      {team.TeamName}
                    </option>
                  ))}
                </optgroup>
              </select>
              <img style={{marginTop: 25}} className="teamLogo img-fluid" src={this.state.team2logo} alt="Team 2" />
              <h2 className="text-center" style={{color: 'white', marginTop: 20}}>Score: {Math.round(this.state.team2PredictedScore)}</h2>
            </div>
        </div>
      </div>        
    );
  }
}

const mapStateToProps = (state) => ({
  teams: state.teamsReducer.teams,
  team1stats: state.team1Reducer.team1stats,
  team2stats: state.team2Reducer.team2stats
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchAllTeams, fetchTeam1Stats, fetchTeam2Stats }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NCAAPredictor);