import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Spells from "./pages/Spells";
import SpellsDetails from "./pages/SpellsDetails";
import Favorites from "./pages/Favorites";
export const appContext = createContext();

function App() {
    const [favorites, setFavorites] = useState([]);
    const [spells, setSpells] = useState([]);
    const filteredFav = spells.filter((f) => favorites.includes(f.index));


    const toggleFavorite = (favId) => {
        setFavorites((oldFav) => {
            if (!oldFav.includes(favId)) {
                return [...oldFav, favId];
            } else {
                return oldFav.filter((f) => f != favId);
            }
        });
    };

    useEffect(() => {
        const spellsFromLocalStorage = localStorage.getItem("favorites");
        if (!!spellsFromLocalStorage) {
            setFavorites([]);
        } else {
            const spellsArrayFromLocalStorage = JSON.parse(
                spellsFromLocalStorage
            );
            setFavorites(spellsArrayFromLocalStorage);
        }
    }, []);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/spells",
                    children: [
                        {
                            index: true,
                            element: <Spells />,
                        },
                        {
                            path: "/spells/:id",
                            element: <SpellsDetails />,
                        },
                    ],
                },
                {
                    path: "/favorites",
                    element: <Favorites />,
                },
            ],
        },
    ]);

    return (
        <>
            <appContext.Provider
                value={{
                    spells: spells,
                    setSpells: setSpells,
                    filteredFav: filteredFav,

                    favorites: favorites,
                    setFavorites: setFavorites,
                    toggleFavorite: toggleFavorite,
                }}
            >
                <RouterProvider router={router} />
            </appContext.Provider>
        </>
    );
}

export default App;
