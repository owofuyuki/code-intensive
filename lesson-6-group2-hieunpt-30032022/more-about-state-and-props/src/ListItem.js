const ListItem = (props) => {
    const done = props.done;

    if (done) return (
        <div style={{ textDecoration: "line-through", opacity: 0.32 }}>
            {props.value}
        </div>
    );

    return (
        <div onClick={props.onClick}>
            {props.value}
        </div>
    );
};

// Muốn chia sẻ dữ liệu giữa các components thì tìm đến ancestor chung của chúng

export default ListItem;