import React, { FC } from 'react'
import './Header.scss';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import Logo from './Logo/Logo';
import MenuList from './MenuList/MenuList';

const Header:FC = () => {
  return (
    <header className='header'>
        <div className="header__content container">
            <div className="header__left">
                <Logo fontSize={35.5} />
                <span className='header__banner'>HD movies at the smallest file size.</span>
            </div>
            <div className="header__right">
                <HeaderSearch/>
                <MenuList/>
            </div>
        </div>
    </header>
  )
}

export default Header