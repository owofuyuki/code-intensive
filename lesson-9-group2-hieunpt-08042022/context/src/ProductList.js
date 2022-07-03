import { useContext } from 'react';
import ThemeContext from "./ThemeContext";

const ProductList = () => {
    const value = useContext(ThemeContext);
    return (
        <div>{value.theme}</div>
    );
};

export default ProductList;