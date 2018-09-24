import React from 'react';
import { connect } from 'react-redux';
import { 
  SectionTitle,
  Stats,
} from '../../components';
import { TeamTab } from '..';
import * as dataAction from '../../actions/dataAction';


class Team extends React.Component {
  render() {
    // console.log(this.props);
    const {
      getSection,
      section,
      match,
      stats,
      changeActivePage
    } = this.props;
    changeActivePage(match.path);
    return (
      <section className='team background1'>
        <SectionTitle section={getSection(section, match.path)} />
        <TeamTab />
        <Stats stats = {stats}/>
      </section>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    section: state.data.section,
    getSection: state.data.getSection,
    team: state.data.team,
    stats: state.data.stats,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeActivePage: path => dispatch(dataAction.changeActivePage(path)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Team)