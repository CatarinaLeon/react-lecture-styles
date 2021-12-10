import React from 'react';
import PropTypes from 'prop-types';
import Tutor from './Tutor/Tutor';

const TutorsBlock = ({ tutors }) => {
  //tutors=[] Дефолтное значение
  return (
    <div>
      <ul>
        {tutors.map(tutor => (
          <li key={tutor.email}>
            <Tutor {...tutor} />
          </li>
        ))}
      </ul>
    </div>
  );
};

TutorsBlock.propTypes = {
  tutors: PropTypes.arrayOf(PropTypes.shape({ firstName: PropTypes.string }))
    .isRequired,
};

export default TutorsBlock;
