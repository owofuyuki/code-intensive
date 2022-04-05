const Card = (props) => {
    return (
        <div style={{
            padding: '18px',
            border: '1px solid black',
            borderRadius: '8px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }}>
            {props.children}
        </div>
    )
};

export default Card;