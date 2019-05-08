import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllTeams } from '../actions/teams';

const tf = require('@tensorflow/tfjs');

// Loads the trained model from the local file to use for prediction

const model = tf.loadLayersModel('http://localhost:8000/model.json');

class NCAAPredictor extends Component {
  componentDidMount() {
    this.props.fetchAllTeams();
  }

  state = {
    team1: '',
    team2: '',
    team1logo: '' || 'https://miro.medium.com/max/480/1*0iD-PD-u-9-Kmd_6TakeEw.png',
    team2logo: '' || 'https://miro.medium.com/max/480/1*0iD-PD-u-9-Kmd_6TakeEw.png',
  }
  
  onInputChangeTeam1 = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (this.props.teams[event.target.selectedIndex-1].logoUrl == null) {
      this.setState({team1logo: 'https://miro.medium.com/max/480/1*0iD-PD-u-9-Kmd_6TakeEw.png'})
    } else {
    this.setState({team1logo: this.props.teams[event.target.selectedIndex-1].logoUrl})
    }
  }

  onInputChangeTeam2 = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (this.props.teams[event.target.selectedIndex-1].logoUrl == null) {
      this.setState({team2logo: 'https://miro.medium.com/max/480/1*0iD-PD-u-9-Kmd_6TakeEw.png'})
    } else {
    this.setState({team2logo: this.props.teams[event.target.selectedIndex-1].logoUrl})
    }
  }
     
  handlePrediction = (event) => {
    console.log('Predict button pushed')

  };

  render() {
    if(!this.props.teams) {
      return('Loading....')
    }

    return (
      <div className="container">        
        <div className="row justify-content-center">
            <div className="col-md-4">
              <select
                className="form-control teamSelect"
                value={this.state.team1}
                onChange={this.onInputChangeTeam1}
                name="team1"
                style={{marginTop: 50}}
              >
                <option value="default" style={{display: 'none'}}>Select Team 1</option>
                {this.props.teams.map(teams => (
                  <option
                    key={teams.TeamName}
                    value={teams.TeamName}
                    name={teams.TeamName}
                  >
                    {teams.TeamName}
                  </option>
                ))}
              </select>
              <img style={{marginTop: 20}} className="teamLogo img-fluid" src={this.state.team1logo} />
              <h4 style={{color: 'white', marginTop: 20}}>Predicted Score: </h4>
            </div>
            <div className="col-md-4 text-center">            
              <button className="btn btn-primary btn-lg" type="button" onClick={this.handlePrediction} style={{marginTop: 250}} disabled={this.state.team1 === this.state.team2}>
                Predict
              </button>
            </div>
            <div className="col-md-4">
              <select
                className="form-control teamSelect"
                value={this.state.team2}
                onChange={this.onInputChangeTeam2}
                name="team2"
                style={{marginTop: 50}}
              >
                <option value="default" style={{display: 'none'}}>Select Team 2</option>
                {this.props.teams.map(teams => (
                  <option
                    key={teams.TeamName}
                    value={teams.TeamName}
                    name={teams.TeamName}
                  >
                    {teams.TeamName}
                  </option>
                ))}
              </select>
                <img style={{marginTop: 20}} className="teamLogo img-fluid" src={this.state.team2logo} />
                <h4 style={{color: 'white', marginTop: 20}}>Predicted Score: </h4>
            </div>
        </div>
      </div>        
    );
  }
}

const mapStateToProps = (state) => ({
  teams: state.teamsReducer.teams
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchAllTeams }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NCAAPredictor);