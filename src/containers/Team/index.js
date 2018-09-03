import React from 'react';
import { connect } from 'react-redux';
import { SectionTitle } from '../../components';
import { TeamTab } from '..';
// import * as dataAction from '../../actions/dataAction';


class Team extends React.Component {
  render() {
    // console.log(this.props);
    const {
      getSection,
      section,
      match,
      // changeActivePage
    } = this.props;
    // changeActivePage(match.path);

    return (
      <section className='team'>
        <SectionTitle section={getSection(section, match.path)} />
        <TeamTab />
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
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeActivePage: path => dispatch(dataAction.changeActivePage(path)),
//   }
// }

export default connect(mapStateToProps)(Team)