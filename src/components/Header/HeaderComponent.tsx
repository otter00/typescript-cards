import React from 'react';
import HeaderStyles from './HeaderComponent.module.scss';
import logo from '../../assets/logo.png';

import {
    Link
} from "react-router-dom";
  
export default function HeaderComponent() {
    return (
            <div className={HeaderStyles.header__container}>
                <div>
                    <nav className={HeaderStyles.header__menu}>
                        <ul className={HeaderStyles.header__list}>
                            <li className={HeaderStyles.header__item}><Link to="/table">Table Words</Link></li>
                            <li className={HeaderStyles.header__item}><Link to="/learn">Learn Words</Link></li>
                            <Link to="/" className={HeaderStyles.home__link}><img src={logo} alt='logo'></img></Link>                    
                        </ul>
                    </nav>
                </div>
            </div>
    )
}