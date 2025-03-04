import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

// Компонент Home отображает приветственное сообщение для авторизованного пользователя
const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1> {/* Заголовок с приветствием */}
    </Card>
  );
};

// Экспорт компонента Home
export default Home;
