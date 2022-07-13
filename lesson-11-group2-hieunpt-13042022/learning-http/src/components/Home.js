import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [pokemons, setPokemons] = useState([]);

    const handleFetchPoke = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
            setTimeout(() => {
                console.log(response);
                setPokemons(response.data.results);
                setIsLoading(false);
            }, [1000]);
        } catch(err) {
            setError(err);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        try {
            setIsLoading(true);
            axios.get("https://pokeapi.co/api/v2/pokemon/").then(response => {
                setTimeout(() => {
                    console.log(response);
                    setPokemons(response.data.results);
                    setIsLoading(false);
                }, [1000]);
            });
        } catch(err) {
            setError(err);
            setIsLoading(false);
        }
    }, []);

    // const handleFetchPoke = async () => {
    //     const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    //     const data = await response.json();
    //     console.log(data);
    //     setPokemons(data.results);
    // };

    // const handleFetchPoke = () => {
    //     fetch("https://pokeapi.co/api/v2/pokemon/")
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             console.log(data);
    //             setPokemons(data.results);
    //         });
    // };

    return (
        <div>
            <button onClick={handleFetchPoke}>Fetch Pokemon!</button>
            {isLoading && <p>Loading...</p>}
            {!isLoading && error && <p>Something went wrong!</p>}
            {!isLoading && !error && pokemons.length > 0 && (
                <ul>
                    {pokemons.map(item => {
                        return <li key={item.url}>{item.name}</li>
                    })}
                </ul>
            )}
            {!isLoading && !error && pokemons.length === 0 && <p>No data</p>}
        </div>
    );
};

export default Home;