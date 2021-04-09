import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
function Index() {
  return (
    <div>
      <App />
      <footer>created by Jacob Potvin -- devChallenges.io</footer>
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root')); 