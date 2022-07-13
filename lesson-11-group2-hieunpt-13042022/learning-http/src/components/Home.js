const Home = () => {
    const handleFetchPoke = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
    };

    return (
        <div>
            <button onClick={handleFetchPoke}>Fetch Pokemon!</button>
        </div>
    );
};

export default Home;