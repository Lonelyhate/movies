import React, { FC, useEffect, useRef, useState } from 'react';
import './HeaderSeacrch.scss';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { activePage, fetchMovies } from '../../../redux/actions/movies';
import cn from 'classnames';
import {
    GenreChangeValue,
    IMovie,
    OrderByValue,
    QualityChangeValue,
    RatingChangeValue,
} from '../../../types/types';
import loader from '../../../assets/images/loading.gif';
import { useNavigate } from 'react-router-dom';
import { fetchCurrentMovie } from '../../../redux/actions/currentMovie';

const HeaderSearch: FC = () => {
    const { items, loading } = useTypedSelector((state) => state.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isValue, setIsValue] = useState<string>('');
    const searchListRef = useRef<HTMLUListElement>(null)

    const onClickItem = (item: number, title: string) => {
        dispatch(fetchCurrentMovie(item));
        navigate(`/${title}`);
        localStorage.setItem('currentMovie', item + '');
        setIsValue('')
    };

    const closedList = (e: any) => {
        if(!e.path.includes(searchListRef.current)) {
            setIsValue('')
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', closedList)
    })

    const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsValue(e.target.value);

        if (isValue.length > 1) {
            activePage(1);
            dispatch(
                fetchMovies(
                    1,
                    e.target.value,
                    QualityChangeValue.ALL,
                    GenreChangeValue.ALL,
                    RatingChangeValue.ALL,
                    OrderByValue.LATEST,
                ),
            );
        }
    };

    return (
        <div className="header-search__block">
            <div className="header-search">
                <BiSearchAlt2 />
                <input
                    onChange={changeSearch}
                    value={isValue}
                    className="header-search__input"
                    type="text"
                    placeholder="Quick search"
                />
                {loading && isValue.length > 2 && (
                    <div className="header-search__load">
                        <img src={loader} alt="" />
                    </div>
                )}
            </div>
            <ul ref={searchListRef}
                className={cn('header-search__list', {
                    active: isValue.length > 2 && !loading,
                })}>
                    
                {items &&
                    items.map(
                        (item, index) =>
                            index < 4 && (
                                <li
                                    key={item.id}
                                    onClick={(e) => {
                                        onClickItem(item.id, item.title);
                                    }}
                                    className="header-search__item">
                                    <div className="header-search__img">
                                        <img src={item.small_cover_image} alt={item.title} />
                                    </div>
                                    <div className="header-search__info">
                                        <h4 className="header-search__info-title">{item.title}</h4>
                                        <div className="header-search__year">{item.year}</div>
                                    </div>
                                </li>
                            ),
                    )}
            </ul>
        </div>
    );
};

export default HeaderSearch;
