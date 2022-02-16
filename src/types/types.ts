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

export type TypeMenuList = {
    menuName: MenuItem.HOME | MenuItem.TRENDING | MenuItem.BROWSE_MOVIES | MenuItem.FAVORITES;
    menuLink:
        | MenuLink.HOME_LINK
        | MenuLink.TRENDING_LINK
        | MenuLink.BROWSE_MOVIES
        | MenuLink.FAVORITES_LINK;
};
