import React, { FC } from 'react';
import './HeaderSeacrch.scss';
import { BiSearchAlt2 } from 'react-icons/bi';

const HeaderSearch: FC = () => {
    return (
        <div className="header-search">
            <BiSearchAlt2 />
            <input className="header-search__input" type="text" placeholder="Quick search" />
        </div>
    );
};

export default HeaderSearch;
