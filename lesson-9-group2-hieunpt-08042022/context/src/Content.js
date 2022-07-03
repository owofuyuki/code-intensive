import ProductList from "./ProductList";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Content = () => {
    const themeCtx = useContext(ThemeContext);

    return (
        <div className="center border" style={{flex: 1, backgroundColor: themeCtx.theme === "light" ? "white" : "black", color: themeCtx.theme === "light" ? "black" : "white"}}>
            <ProductList />
        </div>
    );
};

export default Content;