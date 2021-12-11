import React from 'react';
import PropTypes from 'prop-types';
import CitiesList from './CitiesList/CitiesList';
import BigButton from '../common/BigButton/BigButton';
import addIcon from '../../images/add.svg';

const CitiesBlock = ({ cities }) => {
  // console.log(cities);
  return (
    <div>
      <CitiesList cities={cities} />
      <BigButton text="Добавить город" icon={addIcon} />
    </div>
  );
};

CitiesBlock.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default CitiesBlock;
