import React, { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { appContext } from "../App";

const Spells = (props) => {
    const { favorites, setFavorites, toggleFavorite, spells, setSpells } =
        useContext(appContext);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const some = () => {
            try {
                setLoading(true);
                fetch("https://www.dnd5eapi.co/api/spells")
                    .then((res) => res.json())
                    .then((json) => {
                        setSpells(json.results);
                        setLoading(false);
                    })
                    .catch((error) => setError(error));
            } catch (error) {
                setError(error);
            }
        };
        some();
    }, []);

    return (
        <>
            <div className=" px-24">
                <h3 className=" flex justify-start text-2xl mb-3">
                    All Spells
                </h3>

                {loading ? (
                    <>
                        <ul className="grid grid-cols-4 gap-4 z-0">
                            {Array(50)
                                .fill(null)
                                .map((_, index) => {
                                    return (
                                        <li key={index} className="bg-white p-4 cursor-pointer flex flex-col items-start">
                                            <div className="bg-slate-300 h-8 w-40 rounded-lg mb-3"></div>
                                            <div className="bg-slate-300 h-8 w-20 rounded-lg"></div>
                                        </li>
                                    );
                                })}
                        </ul>
                    </>
                ) : (
                    <ul className=" grid grid-cols-4 gap-4 z-0">
                        {spells?.map((spell) => {
                            return (
                                <>
                                    <div className=" bg-white shadow-sm  rounded-lg p-4 cursor-pointer flex  flex-col items-start relative">
                                        <div className=" flex ">
                                            <li className=" text-[20px]">
                                                <Link to={`${spell.index}`}>
                                                    {spell.name}
                                                </Link>
                                            </li>
                                            <div
                                                onClick={() => {
                                                    toggleFavorite(spell.index);
                                                }}
                                                className=" absolute right-4 top-4 text-[20px]"
                                            >
                                                {favorites.includes(
                                                    spell.index
                                                ) ? (
                                                    <FaHeart className=" text-red-600" />
                                                ) : (
                                                    <FaRegHeart className=" hover:text-red-600" />
                                                )}
                                            </div>
                                        </div>
                                        <p>
                                            <span className=" text-gray-500">
                                                Level:
                                            </span>
                                            {spell.level}
                                        </p>
                                    </div>
                                </>
                            );
                        })}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Spells;
