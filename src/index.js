import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const user = {
  firstName: 'Test',
  lastName: 'User'
};

function formatName(user) {
  const element = (
      <h1 className="userName">User Name- {user.firstName + ' ' + user.lastName}</h1>
  );
  return element;
}
function code() {
  const dateTime= (
    <div>
      {formatName(user)}
      <h2>Current time is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(dateTime, document.getElementById('root'));
}

setInterval(code, 1);
serviceWorker.unregister();
