import React, { FC } from 'react';
import './Pagintaion.scss';
import cn from 'classnames';

interface PaginationProps {
    buttons: any[];
    onClick: (page: string | number) => void;
    activePage: number;
    totalPages: number;
}

const Pagination: FC<PaginationProps> = ({ buttons, onClick, activePage, totalPages }) => {
    return (
        <ul className="pagination">
            {activePage >= 2 && (
                <li className="pagination__item">
                    <button
                        className="pagination__btn"
                        onClick={() => {
                            onClick('<< Previous');
                        }}>
                        {'<< Previous'}
                    </button>
                </li>
            )}
            {activePage >= 3 && (
                <li className="pagination__item">
                    <button
                        className="pagination__btn"
                        onClick={() => {
                            onClick('<< First');
                        }}>
                        {'<< First'}
                    </button>
                </li>
            )}
            {activePage > 7 && (
                <>
                    <li className="pagination__item">
                        <button
                            onClick={() => {
                                onClick(1);
                            }}
                            className="pagination__btn">
                            {1}
                        </button>
                    </li>
                    <li className="pagination__item">
                        <button
                            onClick={() => {
                                onClick(2);
                            }}
                            className="pagination__btn">
                            {2}
                        </button>
                    </li>
                    <li className="pagination__item">
                        <button disabled className="pagination__btn disabled">
                            {'...'}
                        </button>
                    </li>
                </>
            )}
            {buttons.map((btn) => (
                <li key={btn} className="pagination__item">
                    <button
                        onClick={() => {
                            onClick(btn);
                        }}
                        className={cn('pagination__btn', {
                            active: btn === activePage,
                        })}>
                        {btn}
                    </button>
                </li>
            ))}
            {totalPages > 10 && activePage + 5 <= totalPages && (
                <>
                    <li className="pagination__item">
                        <button disabled className="pagination__btn disabled">
                            {'...'}
                        </button>
                    </li>
                    <li className="pagination__item">
                        <button className="pagination__btn" onClick={() => onClick(totalPages - 1)}>
                            {totalPages - 1}
                        </button>
                    </li>
                    <li className="pagination__item">
                        <button className="pagination__btn" onClick={() => onClick(totalPages)}>
                            {totalPages}
                        </button>
                    </li>
                </>
            )}
            {activePage <= totalPages - 2 && (
                <li className="pagination__item">
                    <button
                        className="pagination__btn"
                        onClick={() => {
                            onClick('Last >>');
                        }}>
                        {'Last >>'}
                    </button>
                </li>
            )}
            {activePage <= totalPages - 1 && (
                <li className="pagination__item">
                    <button
                        className="pagination__btn"
                        onClick={() => {
                            onClick('Next >>');
                        }}>
                        {'Next >>'}
                    </button>
                </li>
            )}
        </ul>
    );
};

export default React.memo(Pagination);
