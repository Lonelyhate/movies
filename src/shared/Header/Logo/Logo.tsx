import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

interface LogoProps {
    fontSize: number;
}

const Logo: FC<LogoProps> = ({ fontSize }) => {
    return (
        <div className="logo">
            <Link to="/" style={{ fontSize: `${fontSize}px` }}>Movies</Link>
        </div>
    );
};

export default Logo;
