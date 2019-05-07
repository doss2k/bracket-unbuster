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
    TeamName: ''
  }

  //as data is typed, caputer in the state
  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
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

     // Creates drop down menu that populates with all of the available teams

      <div className="container">
        <h1 className="text-center" style={{marginBottom: 30, color: 'white'}}>Bracket Un-Buster</h1>
        <div className="row justify-content-center">
          <form onSubmit={this.handleSubmit}>
            <select
              className="form-control teamSelect"
              value={this.state.TeamName}
              onChange={this.onInputChange}
              name="TeamName"
            >
              <option value="default">Select Team</option>
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
            <button className="btn btn-primary btn-sm" type="submit" style={{marginLeft: 10}}>
              Predict
            </button>
          </form>
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