import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Footer = () => {
    const themeCtx = useContext(ThemeContext);
    
    const handleSelectChange = (event) => {
        themeCtx.setTheme(event.target.value);
    };

    return (
        <div className="center border" style={{height: 50}}>
            Footer
            <select style={{marginLeft: 12}} value={themeCtx.theme} onChange={handleSelectChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    );
};

export default Footer;