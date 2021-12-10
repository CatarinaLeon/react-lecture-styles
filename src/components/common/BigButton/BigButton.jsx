import React from 'react';
import PropTypes from 'prop-types';

const BigButton = ({ icon, text }) => {
  return (
    <button>
      {icon && <img src={icon} alt={text} />}
      <span>{text}</span>
    </button>
  );
};

BigButton.propTypes = {
  text: PropTypes.string.isRequired,
  onclick: PropTypes.func,
  icon: PropTypes.string,
};

export default BigButton;
