import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { fetchCurrentMovie } from '../../../redux/actions/currentMovie';
import './SimilarMovies.scss';

const SimilarMovies: FC = () => {
    const { similarMovies } = useTypedSelector((state) => state.currentMovie);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const goToMovie = (id: number, title: string) => {
        dispatch(fetchCurrentMovie(id))
        navigate(`/${title}`)
        localStorage.setItem('currentMovie', id + '');
    }

    return (
        <div className="similar-movies">
            <h4 className="similar-movies__title">Similar Movies</h4>
            <ul className="similar-movies__list">
                {similarMovies.map((similar) => (
                    <li onClick={() => {goToMovie(similar.id, similar.title)}} key={similar.id} className="similar-movies__item">
                        <img src={similar.medium_cover_image} alt={similar.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SimilarMovies;
