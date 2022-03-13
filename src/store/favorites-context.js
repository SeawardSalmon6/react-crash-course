import { useEffect, useState, createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupID) => {},
  itemIsFavorite: (meetupID) => {},
});

const favoritesFromLocalStorage = JSON.parse(
  localStorage.getItem("localFavorites") || "[]"
);

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState(favoritesFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("localFavorites", JSON.stringify(userFavorites));
  }, [userFavorites]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupID) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupID);
    });
  }

  function itemIsFavoriteHandler(meetupID) {
    return userFavorites.some((meetup) => meetup.id === meetupID);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
