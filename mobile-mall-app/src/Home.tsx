import React from 'react';
import './Home.css';
import { Button } from 'antd';

interface IProps {}

const Home: React.FC<IProps> = () => {
  return (
    <div className="Home">
      <Button type="primary">Home Page</Button>
    </div>
  );
};

export default Home;
