import React, { useContext } from "react";
import { appContext } from "../App";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Favorites = (props) => {
    const { filteredFav, favorites, spells, toggleFavorite } =
        useContext(appContext);
    return (
        <div className=" px-24">
            <h3 className=" text-2xl mb-2">Favourites</h3>
            {filteredFav !== null && filteredFav.length > 0 ? (
                <ul className=" grid grid-cols-4 gap-4 z-0">
                    {filteredFav.map((spell) => {
                        return (
                            <>
                                <div className=" bg-white  shadow-md  rounded-lg p-4 cursor-pointer flex  flex-col items-start relative">
                                    <div className=" flex ">
                                        <li className=" font-semibold text-[20px]">
                                            <Link to={`/spells/${spell.index}`}>
                                                {spell.name}
                                            </Link>
                                        </li>
                                        <div
                                            onClick={() => {
                                                toggleFavorite(spell.index);
                                            }}
                                            className=" absolute right-4 top-4 text-[20px]"
                                        >
                                            {favorites.includes(spell.index) ? (
                                                <FaHeart className=" text-red-600" />
                                            ) : (
                                                <FaRegHeart className=" hover:text-red-600" />
                                            )}
                                        </div>
                                    </div>
                                    <p>Level:{spell.level}</p>
                                </div>
                            </>
                        );
                    })}
                </ul>
            ) : (
                <div className=" flex gap-2 bg-white rounded-lg p-4 text-gray-500">
                    No favorites added yet, start by adding some from
                    <Link to={"/spells"} className=" underline text-blue-500">
                        spells
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Favorites;
