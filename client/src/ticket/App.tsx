import React, { FC } from 'react';
import { connect } from 'react-redux'

import './App.css';


const App: FC = (props) => {
  return (
    <div className="App">
      车票页面，这是显示车票的页面
    </div>
  );
}


export default connect(
   function mapStateToProps(state) {

  },
  function mapDispatchToProps(dispatch) {

  }
)(App);


