import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './components/actions/actions';



const App = ({car, store, additionalPrice, addFeature, removeFeature}) => {
  
  const removeItem = (feature, car) => {
    // dispatch an action here to remove an item
    removeFeature(feature, car);
  };

  const buyItem = (feature, car) => {
    // dipsatch an action here to add an item
    addFeature(feature, car);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeItem={removeItem} />
      </div>
      <div className="box">
        <AdditionalFeatures store={store} buyItem={buyItem} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice,
    store: state.store
  };
};

export default connect(
  mapStateToProps,
  {addFeature, removeFeature}
)(App);
