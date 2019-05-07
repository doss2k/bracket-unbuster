import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTeams } from '../actions/teams';

// This class handles rendering the filters along with the list of products

class NCAAPredictor extends Component {
  componentDidMount() {
    console.log('Component did mount')
    this.props.fetchTeams();
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
     
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit button pushed')
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
            </div>
            <div className="col-md-4 text-center">            
              <button className="btn btn-primary btn-lg" type="submit" style={{marginTop: 250}} disabled={this.state.team1 === this.state.team2}>
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
  bindActionCreators({ fetchTeams }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NCAAPredictor);