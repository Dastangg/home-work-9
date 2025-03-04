import React from 'react';

import classes from './Button.module.css';
// Создаю компонент Button, который принимает props
const Button = (props) => {
  return (
    <button
      // Устанавливаю тип кнопки, если не передан, то 'button' по умолчанию
      type={props.type || 'button'}
      // Добавляю стили из CSS-модуля и внешний класс
      className={`${classes.button} ${props.className}`}
      // Обработчик клика
      onClick={props.onClick}
      // Возможность отключения кнопки
      disabled={props.disabled}
    >
      {props.children}
    </button>
    //Вставляю содержимое кнопки
  );
};

// Экспортирую компонент Button
export default Button;
