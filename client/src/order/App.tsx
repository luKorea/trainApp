import React, { FC } from 'react';
import { connect } from 'react-redux'

import './App.css';


const App: FC = (props) => {
  return (
    <div className="App">
      这是首页
    </div>
  );
}


export default connect(
   function mapStateToProps(state) {

  },
  function mapDispatchToProps(dispatch) {

  }
)(App);


