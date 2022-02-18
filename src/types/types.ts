export enum MenuItem {
    HOME = 'Home',
    TRENDING = 'Trending',
    BROWSE_MOVIES = 'Browse Movies',
    FAVORITES = 'Favorites',
}

export enum MenuLink {
    HOME_LINK = 'home',
    TRENDING_LINK = 'trending',
    BROWSE_MOVIES = 'browse-movies',
    FAVORITES_LINK = 'favorites',
}

export enum QualityChangeValue {
    ALL = 'all',
    FIRST = '720p',
    SECOND = '1080p',
    THIRD = '2160p',
    D = '3D',
}

export enum QualityChangeName {
    ALL = 'All',
    FIRST = '720p',
    SECOND = '1080p',
    THIRD = '2160p',
    D = '3D',
}

export enum GenreChangeValue {
    ALL = 'all',
    ACTION = 'action',
    ADVENTURE = 'adventure',
    ANIMATION = 'animation',
    BIOGRAPHY = 'biography',
    COMEDY = 'comedy',
    CRIME = 'crime',
    DOCUMENTARY = 'documentary',
    DRAMA = 'drama',
    FAMILY = 'family',
    FANTASY = 'fantasy',
    FILM_NOIR = 'film-noir',
    GAME_SHOW = 'game-show',
    HISTORY = 'history',
    HORROR = 'horror',
    MUSIC = 'music',
    MUSICAL = 'musical',
    MYSTERY = 'mystery',
    NEWS = 'news',
    REALITY_TV = 'reality-tv',
    ROMANCE = 'romance',
    SCI_FI = 'sci-fi',
    SPORT = 'sport',
    TALK_SHOW = 'talk-show',
    THRILLER = 'thriller',
    WAR = 'war',
    WESTERN = 'western',
}

export enum GenreChangeName {
    ALL = 'All',
    ACTION = 'Action',
    ADVENTURE = 'Adventure',
    ANIMATION = 'Animation',
    BIOGRAPHY = 'Biography',
    COMEDY = 'Comedy',
    CRIME = 'Crime',
    DOCUMENTARY = 'Documentary',
    DRAMA = 'Drama',
    FAMILY = 'Аamily',
    FANTASY = 'Аantasy',
    FILM_NOIR = 'Аilm-Noir',
    GAME_SHOW = 'Game-Show',
    HISTORY = 'Рistory',
    HORROR = 'Horror',
    MUSIC = 'Music',
    MUSICAL = 'Musical',
    MYSTERY = 'Mystery',
    NEWS = 'News',
    REALITY_TV = 'Reality-TV',
    ROMANCE = 'Romance',
    SCI_FI = 'Sci-Fi',
    SPORT = 'Sport',
    TALK_SHOW = 'Talk-Show',
    THRILLER = 'Thriller',
    WAR = 'War',
    WESTERN = 'Western',
}

export enum RatingChangeValue {
    ALL = 0,
    NINE = 9,
    EIGHT = 8,
    SEVEN = 7,
    SIX = 6,
    FIVE = 5,
    FOUR = 4,
    THREE = 3,
    TWO = 2,
    ONE = 1,
}

export enum RatingChangeName {
    ALL = 'All',
    NINE = '9+',
    EIGHT = '8+',
    SEVEN = '7+',
    SIX = '6+',
    FIVE = '5+',
    FOUR = '4+',
    THREE = '3+',
    TWO = '2+',
    ONE = '1+',
}

export enum YearChangeValue {
    ALL = '0',
    TWENTY_TWO = '2022',
    TWENTY_ONE = '2021',
    TWENTY = '2020',
    NINETEEN = '2019',
    FIVETEEN_EIGHTEEN = '2015-2018',
    TEN_FOURTEEN = '2010-2014',
    TWO_NINE = '2000-2009',
    NINETY_NINETY_NINE = '1990-1999',
    EIGHTY_EGHTY_NINE = '1980-1989',
    SEVENTY_SEVENTY_NINE = '1970-1979',
    FIVTY_SIXTY_NINE = '1950-1969',
    OLD_YEAR = '1900-1949',
}

export enum YearChangeName {
    ALL = 'All',
    TWENTY_TWO = '2022',
    TWENTY_ONE = '2021',
    TWENTY = '2020',
    NINETEEN = '2019',
    FIVETEEN_EIGHTEEN = '2015-2018',
    TEN_FOURTEEN = '2010-2014',
    TWO_NINE = '2000-2009',
    NINETY_NINETY_NINE = '1990-1999',
    EIGHTY_EGHTY_NINE = '1980-1989',
    SEVENTY_SEVENTY_NINE = '1970-1979',
    FIVTY_SIXTY_NINE = '1950-1969',
    OLD_YEAR = '1900-1949',
}

export enum LanguageChangeValue {
    ALL = 'all',
    ENGLISH = 'en',
    RUSSIAN = 'ru',
    ITALIAN = 'it',
    FRENCH = 'fr',
    SPANISH = 'sp',
}

export enum LanguageChangeName {
    ALL = 'All',
    ENGLISH = 'English',
    RUSSIAN = 'Russian',
    ITALIAN = 'Italian',
    FRENCH = 'French',
    SPANISH = 'Spanish',
}

export enum OrderByValue {
    LATEST = 'latest',
    OLDEST = 'oldest',
    FEATURED = 'featured',
    SEEDS = 'seeds',
    PEERS = 'peers',
    YEAR = 'year',
    RATING = 'rating',
    LIKES = 'likes',
    ALPHABETICAL = 'alphabetical',
    DOWNLOADS = 'downloads',
}

export enum OrderByName {
    LATEST = 'Latest',
    OLDEST = 'Oldest',
    FEATURED = 'Featured',
    SEEDS = 'Seeds',
    PEERS = 'Peers',
    YEAR = 'Year',
    RATING = 'IMBd Rating',
    LIKES = 'YTS Likes',
    ALPHABETICAL = 'Alphabetical',
    DOWNLOADS = 'Downloads',
}

export type TypeMenuList = {
    menuName: MenuItem.HOME | MenuItem.TRENDING | MenuItem.BROWSE_MOVIES | MenuItem.FAVORITES;
    menuLink:
        | MenuLink.HOME_LINK
        | MenuLink.TRENDING_LINK
        | MenuLink.BROWSE_MOVIES
        | MenuLink.FAVORITES_LINK;
};

export type TypeQuality = {
    value:
        | QualityChangeValue.ALL
        | QualityChangeValue.FIRST
        | QualityChangeValue.SECOND
        | QualityChangeValue.THIRD
        | QualityChangeValue.D;
    name:
        | QualityChangeName.ALL
        | QualityChangeName.FIRST
        | QualityChangeName.SECOND
        | QualityChangeName.THIRD
        | QualityChangeName.D;
};

export type TypeGenre = {
    value:
        | GenreChangeValue.ALL
        | GenreChangeValue.ACTION
        | GenreChangeValue.ADVENTURE
        | GenreChangeValue.ANIMATION
        | GenreChangeValue.BIOGRAPHY
        | GenreChangeValue.COMEDY
        | GenreChangeValue.CRIME
        | GenreChangeValue.DOCUMENTARY
        | GenreChangeValue.DRAMA
        | GenreChangeValue.FAMILY
        | GenreChangeValue.FANTASY
        | GenreChangeValue.FILM_NOIR
        | GenreChangeValue.GAME_SHOW
        | GenreChangeValue.HISTORY
        | GenreChangeValue.HORROR
        | GenreChangeValue.MUSIC
        | GenreChangeValue.MUSICAL
        | GenreChangeValue.MYSTERY
        | GenreChangeValue.NEWS
        | GenreChangeValue.REALITY_TV
        | GenreChangeValue.ROMANCE
        | GenreChangeValue.SCI_FI
        | GenreChangeValue.SPORT
        | GenreChangeValue.TALK_SHOW
        | GenreChangeValue.THRILLER
        | GenreChangeValue.WAR
        | GenreChangeValue.WESTERN;
    name:
        | GenreChangeName.ALL
        | GenreChangeName.ACTION
        | GenreChangeName.ADVENTURE
        | GenreChangeName.ANIMATION
        | GenreChangeName.BIOGRAPHY
        | GenreChangeName.COMEDY
        | GenreChangeName.CRIME
        | GenreChangeName.DOCUMENTARY
        | GenreChangeName.DRAMA
        | GenreChangeName.FAMILY
        | GenreChangeName.FANTASY
        | GenreChangeName.FILM_NOIR
        | GenreChangeName.GAME_SHOW
        | GenreChangeName.HISTORY
        | GenreChangeName.HORROR
        | GenreChangeName.MUSIC
        | GenreChangeName.MUSICAL
        | GenreChangeName.MYSTERY
        | GenreChangeName.NEWS
        | GenreChangeName.REALITY_TV
        | GenreChangeName.ROMANCE
        | GenreChangeName.SCI_FI
        | GenreChangeName.SPORT
        | GenreChangeName.TALK_SHOW
        | GenreChangeName.THRILLER
        | GenreChangeName.WAR
        | GenreChangeName.WESTERN;
};

export type TypeRating = {
    value:
        | RatingChangeValue.ALL
        | RatingChangeValue.NINE
        | RatingChangeValue.EIGHT
        | RatingChangeValue.SEVEN
        | RatingChangeValue.SIX
        | RatingChangeValue.FIVE
        | RatingChangeValue.FOUR
        | RatingChangeValue.THREE
        | RatingChangeValue.TWO
        | RatingChangeValue.ONE;
    name:
        | RatingChangeName.ALL
        | RatingChangeName.NINE
        | RatingChangeName.EIGHT
        | RatingChangeName.SEVEN
        | RatingChangeName.SIX
        | RatingChangeName.FIVE
        | RatingChangeName.FOUR
        | RatingChangeName.THREE
        | RatingChangeName.TWO
        | RatingChangeName.ONE;
};

export type TypeYear = {
    value:
        | YearChangeValue.ALL
        | YearChangeValue.TWENTY_TWO
        | YearChangeValue.TWENTY_ONE
        | YearChangeValue.TWENTY
        | YearChangeValue.NINETEEN
        | YearChangeValue.FIVETEEN_EIGHTEEN
        | YearChangeValue.TEN_FOURTEEN
        | YearChangeValue.TWO_NINE
        | YearChangeValue.NINETY_NINETY_NINE
        | YearChangeValue.EIGHTY_EGHTY_NINE
        | YearChangeValue.SEVENTY_SEVENTY_NINE
        | YearChangeValue.FIVTY_SIXTY_NINE
        | YearChangeValue.OLD_YEAR;
    name:
        | YearChangeName.ALL
        | YearChangeName.TWENTY_TWO
        | YearChangeName.TWENTY_ONE
        | YearChangeName.TWENTY
        | YearChangeName.NINETEEN
        | YearChangeName.FIVETEEN_EIGHTEEN
        | YearChangeName.TEN_FOURTEEN
        | YearChangeName.TWO_NINE
        | YearChangeName.NINETY_NINETY_NINE
        | YearChangeName.EIGHTY_EGHTY_NINE
        | YearChangeName.SEVENTY_SEVENTY_NINE
        | YearChangeName.FIVTY_SIXTY_NINE
        | YearChangeName.OLD_YEAR;
};

export type TypeLanguage = {
    value:
        | LanguageChangeValue.ALL
        | LanguageChangeValue.ENGLISH
        | LanguageChangeValue.RUSSIAN
        | LanguageChangeValue.ITALIAN
        | LanguageChangeValue.FRENCH
        | LanguageChangeValue.SPANISH;
    name:
        | LanguageChangeName.ALL
        | LanguageChangeName.ENGLISH
        | LanguageChangeName.RUSSIAN
        | LanguageChangeName.FRENCH
        | LanguageChangeName.ITALIAN
        | LanguageChangeName.SPANISH;
};

export type TypeOrderBy = {
    value:
        | OrderByValue.LATEST
        | OrderByValue.OLDEST
        | OrderByValue.FEATURED
        | OrderByValue.SEEDS
        | OrderByValue.PEERS
        | OrderByValue.YEAR
        | OrderByValue.RATING
        | OrderByValue.LIKES
        | OrderByValue.ALPHABETICAL
        | OrderByValue.DOWNLOADS;
    name:
        | OrderByName.LATEST
        | OrderByName.OLDEST
        | OrderByName.FEATURED
        | OrderByName.SEEDS
        | OrderByName.PEERS
        | OrderByName.YEAR
        | OrderByName.RATING
        | OrderByName.LIKES
        | OrderByName.ALPHABETICAL
        | OrderByName.DOWNLOADS;
};
