import React from 'react';
import { connect } from 'react-redux';
import { SectionTitle } from '../../components';
import { TeamTab } from '..';


class Team extends React.Component {
  render() {
    // console.log(this.props);
    const {
      getSection,
      section,
      match
    } = this.props;
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

export default connect(mapStateToProps)(Team)