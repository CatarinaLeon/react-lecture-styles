import Navigation from '../Navigation/Navigation';
import { navConfig } from '../../data/navigation';

import './Sidebar.css';

const defineStyles = isOpen => {
  const finalStales = ['Sidebar'];
  if (!isOpen) {
    finalStales.push('Sidebar-closed');
  }
  return finalStales.join(' ');
};

const Sidebar = () => {
  const isOpen = true;
  return (
    // <div className={`Sidebar${isOpen ? '' : 'Sidebar-closed'}`}>
    <div className={defineStyles(isOpen)}>
      <div className="Sidebar-decor"></div>
      <button className="toggle-btn" aria-label="Toggle sidebar"></button>

      <Navigation navConfig={navConfig} />
    </div>
  );
};

export default Sidebar;
