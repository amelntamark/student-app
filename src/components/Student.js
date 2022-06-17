import React from 'react';
import PropTypes from 'prop-types';

const Student = (props) => {
  const name = props.name;
  const email = props.email;
    return (
        <ul>
            <li>Nickname: {name}</li>
            <li>Email: {email}</li>
        </ul>
    )
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Student;
