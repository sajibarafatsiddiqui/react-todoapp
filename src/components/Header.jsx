import styles from 'styles/Header.module.css';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };
  return (
    <header style={headerStyle} className={styles.header}>
      <h1>Todo App</h1>
      <p>All the items will persist till browser session expires</p>
    </header>
  );
};
export default Header;
