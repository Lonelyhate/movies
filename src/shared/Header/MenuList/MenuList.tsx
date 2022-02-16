import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, MenuLink, TypeMenuList } from '../../../types/types';
import './MenuList.scss'

const MenuList: FC = () => {
    const menuList: TypeMenuList[] = [
        {
            menuName: MenuItem.HOME,
            menuLink: MenuLink.HOME_LINK,
        },
        {
            menuName: MenuItem.TRENDING,
            menuLink: MenuLink.TRENDING_LINK,
        },
        {
            menuName: MenuItem.BROWSE_MOVIES,
            menuLink: MenuLink.BROWSE_MOVIES,
        },
        {
            menuName: MenuItem.FAVORITES,
            menuLink: MenuLink.FAVORITES_LINK,
        },
    ];

    return (
        <nav className="menu__body">
            <ul className="menu__list">
                {menuList.map((item) => (
                    <li className="menu__item" key={item.menuName}>
                        <Link to={item.menuLink}>{item.menuName}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MenuList;
