import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SpellsDetails = () => {
    const params = useParams();
    const another = params["id"];
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [spell, setSpell] = useState(0);

    useEffect(() => {
        const some = () => {
            try {
                setLoading(true);
                fetch(`https://www.dnd5eapi.co/api/spells/${another}`)
                    .then((res) => res.json())
                    .then((json) => {
                        setSpell(json);
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
            {loading ? (
                <>
                    <div className=" flex items-center justify-center">
                        <div className=" w-[800px] h-96  rounded-lg shadow-lg  bg-white p-5">
                            {/* {spell.index} */}
                            <h3 className=" text-2xl mb-5 bg-slate-300 h-7 w-40 rounded-lg"></h3>

                            <p className=" text-gray-500 mb-5 bg-slate-300 h-32 w-50 rounded-lg"></p>
                            <div className=" grid grid-cols-3 gap-4 ">
                                <p className=" uppercase  bg-slate-300 h-8 w-40 rounded-lg"></p>
                                <p className=" uppercase bg-slate-300  h-8 w-40 rounded-lg"></p>
                                <p className=" uppercase bg-slate-300  h-8 w-40 rounded-lg"></p>
                                <p className=" uppercase bg-slate-300  h-8 w-40 rounded-lg"></p>
                                <p className=" uppercase bg-slate-300  h-8 w-40 rounded-lg"></p>
                                <p className=" uppercase  bg-slate-300  h-8 w-40 rounded-lg"></p>
                                <p className=" uppercase  bg-slate-300  h-8 w-40 rounded-lg"></p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className=" flex items-center justify-center">
                    <div className=" w-[800px] h-96  rounded-lg shadow-lg bg-white p-5">
                        {/* {spell.index} */}
                        <h3 className=" text-2xl mb-5">{spell.name}</h3>

                        <p className=" text-gray-500 mb-5">{spell.desc}</p>
                        <div className=" grid grid-cols-3 gap-4 ">
                            <p className=" uppercase text-gray-500">
                                Level:
                                <span className=" text-black">
                                    {spell.level}
                                </span>
                            </p>
                            <p className=" uppercase text-gray-500">
                                Casting Time:
                                <span className=" text-black">
                                    {spell.casting_time}
                                </span>
                            </p>
                            <p className=" uppercase text-gray-500">
                                Range:
                                <span className=" text-black">
                                    {spell.range}
                                </span>
                            </p>
                            <p className=" uppercase text-gray-500">
                                Component:{spell.components}
                            </p>
                            <p className=" uppercase text-gray-500">
                                Duration:
                                <span className=" text-black">
                                    {spell.duration}
                                </span>
                            </p>
                            <p className=" uppercase text-gray-500">
                                School:{}
                            </p>
                            <p className=" uppercase text-gray-500">
                                Damge Effect:{}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SpellsDetails;
