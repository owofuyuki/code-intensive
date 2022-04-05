import React from 'react';
import './NameCard.css'

const NameCard = (props) => {
    console.log(props);
    // JSX - Javascript XML
    return (
        <div className="name-card">
            <div className="name">Name: {props.name}</div>
            <div className="age" style={{color: 'cornflowerblue'}}>Age: {props.age}</div>
            {props.children}
        </div>
    );
    // return React.createElement("div", { className: "name-card" }, [
    //     React.createElement("div", { className: "name" }, "Name: " + name),
    //     React.createElement("div", { className: "age" }, "Age: " + age),
    // ]);
};

// Đối với inline-style:
// - style trong JSX nhận giá trị là một object (key-value)
// - Các ket CSS phải được viết dưới dạng camelCase
// - Các value CSS cần được viết dưới dạng string hoặc number

export default NameCard;