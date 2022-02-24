import React, { FC, useState } from 'react';
import { torrents } from '../../../types/types';
import './TechSpecs.scss';
import cn from 'classnames';
import SpecContent from './SpecContent/SpecContent';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

interface TechSpecsProps {
    specs: torrents[];
}

const TechSpecs: FC<TechSpecsProps> = ({ specs }) => {
    const {movie} = useTypedSelector(state => state.currentMovie)

    const [activeSpec, setActiveSpecs] = useState<number>(0);

    const onClickSpec = (index: number) => {
        setActiveSpecs(index);
    };

    return (
        <div className="tech-specs">
            <div className="tech-specs__header">
                <h4 className="tech-specs__title">Tech specs</h4>
                <ul className="tech-specs__btns">
                    {specs.map((btn, index) => (
                        <li key={index} className="tech-specs__list">
                            <button
                                onClick={() => {
                                    onClickSpec(index);
                                }}
                                className={cn('tech-specs__btn', {
                                    active: index === activeSpec,
                                })}>
                                {btn.quality}.{btn.type.toUpperCase().slice(0, 3)}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <SpecContent torrent={specs[activeSpec]} mpaRating={movie?.mpa_rating} />
        </div>
    );
};

export default TechSpecs;
