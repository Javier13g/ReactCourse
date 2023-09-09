import React, { useState } from "react";
const PokeApp = () => {

    const [pokemons, setPokemons] = useState(['Infernape','Rayquaza', 'Greninja'])

    function addPoke()
    {
        setPokemons([...pokemons, 'Pikachu']);
        console.log(pokemons)
    }
    return (
        <>
        <h2>PokeApp</h2>
        <button onClick={addPoke}>Add</button>
        <ol>
            {
                pokemons.map(poke => {
                    console.log(poke);
                    return <li key={poke}>{poke}</li>
                })
            }
        </ol>
        </>
    )
}

export default PokeApp