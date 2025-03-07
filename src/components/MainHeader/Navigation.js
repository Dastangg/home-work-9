import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../store/auth-context';

// Создаю компонент Navigation, который принимает props
const Navigation = (props) => {
  const ctxData=useContext(AuthContext)
  return (
          <nav className={classes.nav}>
      {console.log(ctxData)}
     <ul>
       {/* Если пользователь залогинен, показываю пункт "Users" */}
       {ctxData.isLoggedIn && (//AuthContext.isLoggedIn
         <li>
           <a href="/">Users</a>
         </li>
       )}
       {/* Если пользователь залогинен, показываю пункт "Admin" */}
       {ctxData.isLoggedIn && (
         <li>
           <a href="/">Admin</a>
         </li>
       )}
       {/* Если пользователь залогинен, показываю кнопку выхода */}
       {ctxData.isLoggedIn && (
         <li>
           <button onClick={ctxData.isLoggout}>Logout</button>
         </li>
       )}
     </ul>
   </nav>
      
   
    
  );
};

// Экспортирую компонент Navigation
export default Navigation;


