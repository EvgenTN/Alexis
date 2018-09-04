import React from 'react';
import { connect } from 'react-redux';
import * as components from '../../components';
import * as dataAction from '../../actions/dataAction';

class WorkSteps extends React.Component {
  render() {
    // console.log(this.props)
    var sideLeft = false;
    const {
      match,
      section,
      getSection,
      work,
      changeActivePage,
    } = this.props;
    changeActivePage(match.path);
    return (
      <section className='workSteps'>
      <div className='wrapper'>
        <components.SectionTitle
          section={getSection(section, match.path)}
        />
        {work && work.map((item, id) => {
          sideLeft = !sideLeft
          return (
            <components.WorkStep
            key={id}
            step = {item}
            sideLeft = {sideLeft}
            />
          )
        })}
      </div>
        
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    section: state.data.section,
    getSection: state.data.getSection,
    work: state.data.work,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeActivePage: path => dispatch(dataAction.changeActivePage(path))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkSteps);