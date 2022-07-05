import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleWelcome = () => {
        setTimeout(() => {
            navigate("/welcome");
        }, 1000);
    };

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleWelcome}>Click to Welcome!</button>
            <div style={{ marginTop: 16 }}>
                <Link to="/products">View products</Link>
            </div>
        </div>
    );
};

export default Home;