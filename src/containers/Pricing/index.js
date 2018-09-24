import React from 'react';
import { connect } from 'react-redux';
import { SectionTitle, PricingBox } from "../../components";
import data from '../../data/pricing.txt';
import * as dataAction from '../../actions/dataAction';

class Pricing extends React.Component {

  componentWillMount() {
    fetch(data)
      .then(response => response.json())
      .then((pricing) => this.props.addData(
        {
          pricing
        }
      ))
  }

  render() {
    console.log(this.props);
    const {
      section,
      match,
      getSection,
      changeActivePage,
      pricing,
    } = this.props;

    changeActivePage(match.path);
    return (
      <section className="pricing background1">
        <div className="wrapper">
          <SectionTitle
            section={getSection(section, match.path)}
          />
          {
            pricing &&
            <div className='row'>
             { pricing.map((item, id) => {
              return (
                <PricingBox
                key={id}
                price={item}
              />
              )
            })}
            </div>


          }
        </div>

      </section>
    )
  }
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    section: state.data.section,
    getSection: state.data.getSection,
    pricing: state.data.pricing,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addData: data => dispatch(dataAction.addData(data)),
    changeActivePage: path => dispatch(dataAction.changeActivePage(path)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pricing);
