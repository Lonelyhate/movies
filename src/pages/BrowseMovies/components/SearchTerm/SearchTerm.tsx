import React, { FC } from 'react';
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
            name: OrderByName.LATEST
        },
        {
            value: OrderByValue.OLDEST,
            name: OrderByName.OLDEST
        },
        {
            value: OrderByValue.FEATURED,
            name: OrderByName.FEATURED
        },
        {
            value: OrderByValue.SEEDS,
            name: OrderByName.SEEDS
        },
        {
            value: OrderByValue.PEERS,
            name: OrderByName.PEERS
        },
        {
            value: OrderByValue.YEAR,
            name: OrderByName.YEAR
        },
        {
            value: OrderByValue.RATING,
            name: OrderByName.RATING
        },
        {
            value: OrderByValue.LIKES,
            name: OrderByName.LIKES
        },
        {
            value: OrderByValue.ALPHABETICAL,
            name: OrderByName.ALPHABETICAL
        },
        {
            value: OrderByValue.DOWNLOADS,
            name: OrderByName.DOWNLOADS
        },
    ]

    return (
        <div className="search-term">
            <div className="container-page">
                <p className="search-term__title">Search Term:</p>
                <div className="search-term__input">
                    <input type="text" />
                    <button className="search-term__btn">Search</button>
                </div>
                <div className="search-term__selects">
                    <SelectTerm items={qualities} name="quality" title="Quality:" />
                    <SelectTerm items={genres} name="genre" title="Genre:" />
                    <SelectTerm items={ratings} name="rating" title="Rating:" />
                    <SelectTerm items={years} name="year" title="Year:" />
                    <SelectTerm items={languages} name='language' title='Language:'/>
                    <SelectTerm items={ordersBy} name='order_by' title='Order By:'/>
                </div>
            </div>
        </div>
    );
};

export default SearchTerm;
