import ThemeContext from "./ThemeContext";

const Header = () => {
    return (
        <div className="center border" style={{height: 50}}>
            Header
            <ThemeContext.Consumer>
                {(value) => {
                    return <div style={{marginLeft: 20}}>{value.theme}</div>;
                }}
            </ThemeContext.Consumer>
        </div>
    );
};

export default Header;