import React, { useContext, useRef, useState } from "react";
import navDatas from "../datas/navDatas";
import NavItems from "./NavItems";
import { FaRegHeart } from "react-icons/fa";
import Drawer from "../components/Drawer";
import useToggle from "../hooks/useToggle";
import { appContext } from "../App";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";

const NavBar = (props) => {
    const { favorites, filteredFav, toggleFavorite } = useContext(appContext);
    const [indicatorBounds, setIndicatorBounds] = useState({
        width: 60,
        left: 0,
    });
    const { open, close, isOpen, toggle } = useToggle(false);
    const drawerButtonRef = useRef();
    const imgRef = useRef();

    return (
        <div>
            <div className="font-custom  flex justify-between shadow-md  h-20 px-24 items-center mb-16  bg-transparent relative">
                <Link to={"/"}>
                    <img
                        src="/img/spellLogo.png"
                        className=" h-14 w-14 cursor-pointer"
                    />
                </Link>

                <div className="  flex ">
                    <ul className=" flex gap-11 mr-8">
                        {navDatas.map((navData) => {
                            return (
                                <>
                                    <li className=" text-[18px] px-2 mr-2">
                                        <NavItems
                                            setIndicatorBounds={
                                                setIndicatorBounds
                                            }
                                            navData={navData}
                                        />
                                    </li>
                                </>
                            );
                        })}
                    </ul>
                    <div
                        className=" transition-all absolute bottom-0 h-1 w-16 bg-blue-500 rounded-t-lg"
                        style={indicatorBounds}
                    ></div>

                    <div className=" relative">
                        <button
                            className=" text-2xl text-blue-500 transition-all border-[1px] border-gray-300 rounded-full p-2 hover:border-blue-500"
                            onClick={open}
                            ref={drawerButtonRef}
                        >
                            <FaRegHeart />
                        </button>
                        {favorites && favorites.length > 0 ? (
                            <>
                                <p className="flex items-center justify-center text-white absolute -bottom-1 -right-2 bg-blue-500 rounded-full h-5 w-5">
                                    {favorites.length}
                                </p>
                            </>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
            <Drawer
                close={close}
                isOpen={isOpen}
                drawerButtonRef={drawerButtonRef}
            >
                <div className=" flex bg-white items-center h-20 mb-4 pl-8">
                    {" "}
                    <Link to={"/"}>
                        {" "}
                        <img
                            src="/img/spellLogo.png"
                            className=" h-14 w-14 cursor-pointer"
                        />
                    </Link>
                </div>

                <div className=" px-6 ">
                    {favorites && favorites.length > 0 ? (
                        <ul className=" flex flex-col gap-4 z-0">
                            {filteredFav?.map((spell) => {
                                return (
                                    <>
                                        <div className=" bg-white p-3 shadow-md  rounded-lg  flex  flex-col items-start relative">
                                            <div className=" flex   ">
                                                <li className=" font-semibold text-[20px]">
                                                    <Link
                                                        to={`/spells/${spell.index}`}
                                                    >
                                                        {spell.name}
                                                    </Link>
                                                </li>
                                                <div
                                                    onClick={() => {
                                                        toggleFavorite(
                                                            spell.index
                                                        );
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
                                            <p>Level:{spell.level}</p>
                                        </div>
                                    </>
                                );
                            })}
                        </ul>
                    ) : (
                        "no favourite spells until now"
                    )}
                </div>
            </Drawer>
        </div>
    );
};

export default NavBar;
