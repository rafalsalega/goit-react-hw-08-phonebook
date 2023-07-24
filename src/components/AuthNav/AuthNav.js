import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.link} to="/goit-react-hw-08-phonebook/register">
        Sign up [Register]
      </NavLink>
      <NavLink className={css.link} to="/goit-react-hw-08-phonebook/login">
        Sign In 
      </NavLink>
    </div>
  );
};