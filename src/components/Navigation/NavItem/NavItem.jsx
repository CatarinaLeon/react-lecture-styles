import PropTypes from 'prop-types';

const NavItem = ({ name }) => {
  // console.log(props);
  return <a href="/">{name}</a>;
};

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NavItem;
