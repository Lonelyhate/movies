import React from 'react';
import loading from '../../assets/images/loading.gif'
import './Loader.scss'

const Loader = () => {
    return (
        <div className="loader">
            <img src={loading} alt="загрузка..." />
        </div>
    );
};

export default Loader;
