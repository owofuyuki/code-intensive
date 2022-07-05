import { Link, Outlet, useSearchParams } from 'react-router-dom';

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams({ sortBy: 'asc'});

    const handleSortChange = (event) => {
        setSearchParams({
            sortBy: event.target.value,
        });
    };

    return (
        <div>
            <h1>Products</h1>
            <select value={searchParams.get("sortBy")} onChange={handleSortChange}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <ul>
                <li><Link to="/products/1">Product 1</Link></li>
                <li><Link to="/products/2">Product 2</Link></li>
                <li><Link to="/products/3">Product 3</Link></li>
            </ul>
            <Outlet />
        </div>
    );
};

export default Products;