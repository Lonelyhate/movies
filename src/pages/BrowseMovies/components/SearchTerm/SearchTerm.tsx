import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { activePage, fetchMovies } from '../../../../redux/actions/movies';
import {
    setGenre,
    setLanguage,
    setOrderBy,
    setQuality,
    setRating,
    setValue,
    setYear,
} from '../../../../redux/actions/search';
import {
    GenreChangeName,
    GenreChangeValue,
    LanguageChangeName,
    LanguageChangeValue,
    OrderByName,
    OrderByValue,
    QualityChangeName,
    QualityChangeValue,
    RatingChangeName,
    RatingChangeValue,
    TypeGenre,
    TypeLanguage,
    TypeOrderBy,
    TypeQuality,
    TypeRating,
    TypeYear,
    YearChangeName,
    YearChangeValue,
} from '../../../../types/types';
import './SearchTerm.scss';
import SelectTerm from './SelectTerm/SelectTerm';

const SearchTerm: FC = () => {
    const qualities: TypeQuality[] = [
        {
            value: QualityChangeValue.ALL,
            name: QualityChangeName.ALL,
        },
        {
            value: QualityChangeValue.FIRST,
            name: QualityChangeName.FIRST,
        },
        {
            value: QualityChangeValue.SECOND,
            name: QualityChangeName.SECOND,
        },
        {
            value: QualityChangeValue.THIRD,
            name: QualityChangeName.THIRD,
        },
        {
            value: QualityChangeValue.D,
            name: QualityChangeName.D,
        },
    ];

    const genres: TypeGenre[] = [
        {
            value: GenreChangeValue.ALL,
            name: GenreChangeName.ALL,
        },
        {
            value: GenreChangeValue.ACTION,
            name: GenreChangeName.ACTION,
        },
        {
            value: GenreChangeValue.ADVENTURE,
            name: GenreChangeName.ADVENTURE,
        },
        {
            value: GenreChangeValue.ANIMATION,
            name: GenreChangeName.ANIMATION,
        },
        {
            value: GenreChangeValue.BIOGRAPHY,
            name: GenreChangeName.BIOGRAPHY,
        },
        {
            value: GenreChangeValue.COMEDY,
            name: GenreChangeName.COMEDY,
        },
        {
            value: GenreChangeValue.CRIME,
            name: GenreChangeName.CRIME,
        },
        {
            value: GenreChangeValue.DOCUMENTARY,
            name: GenreChangeName.DOCUMENTARY,
        },
        {
            value: GenreChangeValue.DRAMA,
            name: GenreChangeName.DRAMA,
        },
        {
            value: GenreChangeValue.FAMILY,
            name: GenreChangeName.FAMILY,
        },
        {
            value: GenreChangeValue.FANTASY,
            name: GenreChangeName.FANTASY,
        },
        {
            value: GenreChangeValue.FILM_NOIR,
            name: GenreChangeName.FILM_NOIR,
        },
        {
            value: GenreChangeValue.GAME_SHOW,
            name: GenreChangeName.GAME_SHOW,
        },
        {
            value: GenreChangeValue.HISTORY,
            name: GenreChangeName.HISTORY,
        },
        {
            value: GenreChangeValue.HORROR,
            name: GenreChangeName.HORROR,
        },
        {
            value: GenreChangeValue.MUSIC,
            name: GenreChangeName.MUSIC,
        },
        {
            value: GenreChangeValue.MUSICAL,
            name: GenreChangeName.MUSICAL,
        },
        {
            value: GenreChangeValue.MYSTERY,
            name: GenreChangeName.MYSTERY,
        },
        {
            value: GenreChangeValue.NEWS,
            name: GenreChangeName.NEWS,
        },
        {
            value: GenreChangeValue.REALITY_TV,
            name: GenreChangeName.REALITY_TV,
        },
        {
            value: GenreChangeValue.ROMANCE,
            name: GenreChangeName.ROMANCE,
        },
        {
            value: GenreChangeValue.SCI_FI,
            name: GenreChangeName.SCI_FI,
        },
        {
            value: GenreChangeValue.SPORT,
            name: GenreChangeName.SPORT,
        },
        {
            value: GenreChangeValue.TALK_SHOW,
            name: GenreChangeName.TALK_SHOW,
        },
        {
            value: GenreChangeValue.THRILLER,
            name: GenreChangeName.THRILLER,
        },
        {
            value: GenreChangeValue.WAR,
            name: GenreChangeName.WAR,
        },
        {
            value: GenreChangeValue.WESTERN,
            name: GenreChangeName.WESTERN,
        },
    ];

    const ratings: TypeRating[] = [
        {
            value: RatingChangeValue.ALL,
            name: RatingChangeName.ALL,
        },
        {
            value: RatingChangeValue.NINE,
            name: RatingChangeName.NINE,
        },
        {
            value: RatingChangeValue.EIGHT,
            name: RatingChangeName.EIGHT,
        },
        {
            value: RatingChangeValue.SEVEN,
            name: RatingChangeName.SEVEN,
        },
        {
            value: RatingChangeValue.SIX,
            name: RatingChangeName.SIX,
        },
        {
            value: RatingChangeValue.FIVE,
            name: RatingChangeName.FIVE,
        },
        {
            value: RatingChangeValue.FOUR,
            name: RatingChangeName.FOUR,
        },
        {
            value: RatingChangeValue.THREE,
            name: RatingChangeName.THREE,
        },
        {
            value: RatingChangeValue.TWO,
            name: RatingChangeName.TWO,
        },
        {
            value: RatingChangeValue.ONE,
            name: RatingChangeName.ONE,
        },
    ];

    const years: TypeYear[] = [
        {
            value: YearChangeValue.ALL,
            name: YearChangeName.ALL,
        },
        {
            value: YearChangeValue.TWENTY_TWO,
            name: YearChangeName.TWENTY_TWO,
        },
        {
            value: YearChangeValue.TWENTY_ONE,
            name: YearChangeName.TWENTY_ONE,
        },
        {
            value: YearChangeValue.TWENTY,
            name: YearChangeName.TWENTY,
        },
        {
            value: YearChangeValue.NINETEEN,
            name: YearChangeName.NINETEEN,
        },
        {
            value: YearChangeValue.FIVETEEN_EIGHTEEN,
            name: YearChangeName.FIVETEEN_EIGHTEEN,
        },
        {
            value: YearChangeValue.TEN_FOURTEEN,
            name: YearChangeName.TEN_FOURTEEN,
        },
        {
            value: YearChangeValue.TWO_NINE,
            name: YearChangeName.TWO_NINE,
        },
        {
            value: YearChangeValue.NINETY_NINETY_NINE,
            name: YearChangeName.NINETY_NINETY_NINE,
        },
        {
            value: YearChangeValue.EIGHTY_EGHTY_NINE,
            name: YearChangeName.EIGHTY_EGHTY_NINE,
        },
        {
            value: YearChangeValue.SEVENTY_SEVENTY_NINE,
            name: YearChangeName.SEVENTY_SEVENTY_NINE,
        },
        {
            value: YearChangeValue.FIVTY_SIXTY_NINE,
            name: YearChangeName.FIVTY_SIXTY_NINE,
        },
        {
            value: YearChangeValue.OLD_YEAR,
            name: YearChangeName.OLD_YEAR,
        },
    ];

    const languages: TypeLanguage[] = [
        {
            value: LanguageChangeValue.ALL,
            name: LanguageChangeName.ALL,
        },
        {
            value: LanguageChangeValue.ENGLISH,
            name: LanguageChangeName.ENGLISH,
        },
        {
            value: LanguageChangeValue.RUSSIAN,
            name: LanguageChangeName.RUSSIAN,
        },
        {
            value: LanguageChangeValue.FRENCH,
            name: LanguageChangeName.FRENCH,
        },
        {
            value: LanguageChangeValue.ITALIAN,
            name: LanguageChangeName.ITALIAN,
        },
        {
            value: LanguageChangeValue.SPANISH,
            name: LanguageChangeName.SPANISH,
        },
    ];

    const ordersBy: TypeOrderBy[] = [
        {
            value: OrderByValue.LATEST,
            name: OrderByName.LATEST,
        },
        {
            value: OrderByValue.OLDEST,
            name: OrderByName.OLDEST,
        },
        {
            value: OrderByValue.FEATURED,
            name: OrderByName.FEATURED,
        },
        {
            value: OrderByValue.SEEDS,
            name: OrderByName.SEEDS,
        },
        {
            value: OrderByValue.PEERS,
            name: OrderByName.PEERS,
        },
        {
            value: OrderByValue.YEAR,
            name: OrderByName.YEAR,
        },
        {
            value: OrderByValue.RATING,
            name: OrderByName.RATING,
        },
        {
            value: OrderByValue.LIKES,
            name: OrderByName.LIKES,
        },
        {
            value: OrderByValue.ALPHABETICAL,
            name: OrderByName.ALPHABETICAL,
        },
        {
            value: OrderByValue.DOWNLOADS,
            name: OrderByName.DOWNLOADS,
        },
    ];

    const dispatch = useDispatch();
    const { quality, genre, rating, year, language, orderBy, value } = useTypedSelector(
        (state) => state.search,
    );
    const { page } = useTypedSelector((state) => state.movies);
    const [isValue, setIsValue] = useState<string>('');

    const getMovies = (
        value: string,
        quality: string,
        genre: string,
        rating: string | number,
        year: string,
        language: string,
        order_by: string,
        page: number
    ) => {
        dispatch(setValue(isValue))
        dispatch(fetchMovies(page, value, quality, genre, rating, year, language, orderBy));
        dispatch(activePage(1));
    };

    useEffect(() => {

    }, [genre])

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsValue(e.target.value.split(' ').join('+'));
    };

    const m = React.useMemo(() => {
        console.log(1)
    }, [genre])

    const onChangeValueQuality = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setQuality(e.target.value));
    };

    const onChangeValueGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setGenre(e.target.value));
    };

    const onChangeValueRating = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setRating(e.target.value));
    };

    const onChangeValueYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setYear(e.target.value));
    };

    const onChangeValueLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setLanguage(e.target.value));
    };

    const onChangeValueSortBy = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setOrderBy(e.target.value));
    };

    return (
        <div className="search-term">
            <div className="container-page">
                <p className="search-term__title">Search Term:</p>
                <div className="search-term__input">
                    <input
                        onChange={onChangeValue}
                        onKeyPress={(e) =>
                            e.key === 'Enter' &&
                            getMovies(isValue, quality, genre, rating, year, language, orderBy, page)
                        }
                        type="text"
                    />
                    <button
                        onClick={() => {
                            getMovies(isValue, quality, genre, rating, year, language, orderBy, page);
                        }}
                        className="search-term__btn">
                        Search
                    </button>
                </div>
                <div className="search-term__selects">
                    <SelectTerm
                        items={qualities}
                        onChangeValue={onChangeValueQuality}
                        name="quality"
                        title="Quality:"
                    />
                    <SelectTerm
                        items={genres}
                        onChangeValue={onChangeValueGenre}
                        name="genre"
                        title="Genre:"
                    />
                    <SelectTerm
                        items={ratings}
                        onChangeValue={onChangeValueRating}
                        name="rating"
                        title="Rating:"
                    />
                    <SelectTerm
                        items={years}
                        onChangeValue={onChangeValueYear}
                        name="year"
                        title="Year:"
                    />
                    <SelectTerm
                        items={languages}
                        onChangeValue={onChangeValueLanguage}
                        name="language"
                        title="Language:"
                    />
                    <SelectTerm
                        items={ordersBy}
                        onChangeValue={onChangeValueSortBy}
                        name="order_by"
                        title="Order By:"
                    />
                </div>
            </div>
        </div>
    );
};

export default React.memo(SearchTerm);
