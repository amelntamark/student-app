import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './Student.css';

const Student = (props) => {
  const name = props.name;
  const email = props.email;

  const [isPresent, setIsPresent] = useState(false);

  const togglePresence = () => {
    setIsPresent(!isPresent)
  }
  
  const nameColor = isPresent ? 'green' : 'red';

    return (
      <React.Fragment>
        <ul>
            <li className={nameColor}>Nickname: {name}</li>
            <li>Email: {email}</li>
        </ul>
        <button onClick={togglePresence}>Toggle if {props.name} is present</button>
      </React.Fragment>
    )
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Student;
