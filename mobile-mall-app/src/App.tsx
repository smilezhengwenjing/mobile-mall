import React from 'react';
// import Home from './Home';
import Register from './pages/login/register';
import styles from './App.less';
// eslint-disable-next-line import/no-unresolved
// import Test from '@/components/Test';
const App = () => {
  return (
    <div className={styles.App}>
      {/* <Home /> */}
      <Register />
      {/* <Test /> */}
    </div>
  );
};

export default App;
