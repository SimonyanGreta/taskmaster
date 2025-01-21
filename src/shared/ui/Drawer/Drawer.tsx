import React from 'react';
import styles from './Drawer.module.scss';
import sidebarIcon from '../../../assets/Icon/sidebar.svg';

type DrawerProps = {
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

export const Drawer: React.FC<DrawerProps> = ({ isOpen, onToggle, children }) => {
  return (
    <div
      className={`${styles.drawer} ${isOpen ? styles.open : ''}`}
      style={{ '--sidebar-width': '280px' } as React.CSSProperties}
    >
      <div className={styles.toggleButton} onClick={onToggle}>
        <img src={sidebarIcon} alt="ToggleSidebar" />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};
