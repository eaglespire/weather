import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info" style={styles.footer}>
        <p style={{textAlign:'center'}}>Designed by Ohwofasa Andrew</p>
        <p style={{textAlign:'center'}}><a href="https://eaglespire.com">eaglespire.com</a> copyright &copy;2020</p>
      </div>
    </React.Fragment>
  );
}

const styles = {
    footer: {
        background: '#150C11',
        color:'white',
        padding:'2em',
        marginTop:'2em'
    }
}

export default App;
