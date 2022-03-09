import React from 'react';
import {Link} from "react-router-dom";


export const Layout = ({children}) => {
  return (
    <div className="">
      <div className="wrapper">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recordings">Записи</Link>
          </li>
          <li>
            <Link to="/expenses">Расходы</Link>
          </li>
          <li>
            <Link to="/statistics">Статистика</Link>
          </li>
        </ul >
      </div>
      <div >
        {children}
      </div>
    </div>
  );
};