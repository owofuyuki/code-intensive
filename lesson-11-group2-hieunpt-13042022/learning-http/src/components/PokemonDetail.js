import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PokemonDetail = () => {
    const params = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`).then(response => {
            setPokemon(response.data);
        });
    }, [params.name]);

    return (
        <div>
            {pokemon && (
                <div>
                    <p>Name: {pokemon.name} </p>
                    <img src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name} />
                </div>
            )}
        </div>
    );
};

export default PokemonDetail;