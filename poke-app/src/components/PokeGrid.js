import React, { useEffect, useState } from "react";

export const PokeGrid = ({ Pokemon }) => {
    console.log("poke", Pokemon)
    const [dataP, setData] = useState([]);
    useEffect(() => {
        getDataPoke();
    }, [])

    const getDataPoke = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${Pokemon.toLowerCase()}`;
        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data)

        const dataPoke = {
            id: data.id,
            name: data.name,
            img: data.sprites.front_default
        }
        console.log(" dataPoke", dataPoke)
        setData(dataPoke)
    }

    return (
        <>
            <h3> {Pokemon}</h3>
            <img src={dataP.img} />
        </>
    )
}