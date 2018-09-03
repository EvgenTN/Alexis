import React from 'react';
import { connect } from 'react-redux';
import { ItemTeam, TeamTabInfo } from '../../components';
import * as teamMemberAction from '../../actions/teamMemberAction';



class TeamTab extends React.Component {
  render() {
    // console.log(this.props.activeTeamMember);
    const {
      chooseTeamMember,
      team,
      activeTeamMember,
    } = this.props;
    return (
      <div className='wrapper'>
        <div className='row'>
          {
            team && team.map((item, id) => {
              return (
                <ItemTeam
                  activeTeamMember={activeTeamMember}
                  chooseTeamMember={chooseTeamMember}
                  itemTeam={item}
                  key={id}
                  id={id}
                />
              )
            })
          }
        </div>
        {
          activeTeamMember !== undefined &&
          <TeamTabInfo
            itemInfo={team[activeTeamMember]}
          />
        }
      </div>

    )
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    team: state.data.team,
    activeTeamMember: state.teamMember.activeTeamMember
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    chooseTeamMember: id => dispatch(teamMemberAction.choose(id)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TeamTab);