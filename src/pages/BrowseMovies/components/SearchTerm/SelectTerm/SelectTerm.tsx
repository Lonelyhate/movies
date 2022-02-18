import React, { FC } from 'react';
import {
    TypeGenre,
    TypeLanguage,
    TypeOrderBy,
    TypeQuality,
    TypeRating,
    TypeYear,
} from '../../../../../types/types';
import './SelectTerm.scss';
import { CgArrowsVAlt } from 'react-icons/cg';

interface SelectTermProps {
    items: TypeQuality[] | TypeGenre[] | TypeRating[] | TypeYear[] | TypeLanguage[] | TypeOrderBy[];
    title: string;
    name: string;
}

const SelectTerm: FC<SelectTermProps> = ({ items, title, name }) => {
    return (
        <div className="select-term">
            <p className="select-term__title">{title}</p>
            <select name={name}>
                {items.map((option) => (
                    <option key={option.value} value={option.value}>{option.name}</option>
                ))}
            </select>
            <CgArrowsVAlt />
        </div>
    );
};

export default SelectTerm;
