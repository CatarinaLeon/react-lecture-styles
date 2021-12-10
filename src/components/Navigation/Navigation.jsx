import NavItem from './NavItem/NavItem';
import { navConfig } from '../../data/navigation';

const Navigation = () => {
  return (
    <nav>
      {/* <a href="/">{navConfig[0].name}</a>
            <a href="/">{navConfig[1].name}</a> */}
      {/* Лучше перебирающий метод массива map */}

      {/* {navConfig.map(navItem => (
                <a key={navItem.name} href="/">{navItem.name}</a>
            ))} */}

      {/* С ключем index и деструкт */}

      {navConfig.map(({ name }, index) => (
        <NavItem key={index} name={name} />
      ))}
    </nav>
  );
};

export default Navigation;
