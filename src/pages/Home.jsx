import React from "react";
import Drawer from "../components/Drawer";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-96 w-full">
            <div className=" text-5xl flex text-gray-500">Welcome to</div>
            <h1 className=" text-7xl mb-2">Dnd spell factory</h1>

            <p className=" text-2xl text-gray-400 mb-6">
                Where you can find all you favorite dungeon and dragon spells
            </p>
            <div className=" flex gap-3">
                {" "}
                <Link
                    className=" rounded-xl w-96 h-11 items-center flex justify-center text-white bg-blue-700"
                    to="/spells"
                >
                    view all spells
                </Link>
                <Link
                    className=" rounded-xl w-96 h-11 items-center flex justify-center text-black border-black border-2 bg-white"
                    to="/favorites"
                >
                    view favorites
                </Link>
            </div>
        </div>
    );
};

export default Home;
