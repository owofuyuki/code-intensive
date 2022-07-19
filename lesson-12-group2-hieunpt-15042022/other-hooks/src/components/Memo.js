import { memo, useState } from 'react';

const Normal = (props) => {
    console.log("Normal, re-render");

    return (
        <div>
            Normal: {props.name} {props.age}
        </div>
    )
};

const Pure = (props) => {
    // Shallow Compare
    console.log("Pure, re-render");

    return (
        <div>
            Pure: {props.name} {props.age}
        </div>
    )
};

// Tuỳ biến cách so sánh hai props
const propsAreEquals = (prev, next) => {
    console.log("prevProps: ", prev);
    console.log("nextProps: ", next);
    return prev.name === next.name && prev.age === next.age;
};

// Sử dụng memo để so sánh từng thành phần trước khi render
const Memoized = memo(Pure, propsAreEquals); // Higher Order Function

const Memo = () => {
    const [value, setValue] = useState({ name: "Fuyuki", age: 20});
    
    const updateValue = () => {
        setValue({ ...value })
    };

    const updateName = () => {
        setValue({ ...value, name: value.name + " Snow" })
    };

    const updateAge = () => {
        setValue({ ...value, age: value.age + 4 })
    };

    return (
        <div style={{margin: 32}}>
            <button style={{marginBottom: 8}} onClick={updateValue}>Change value</button>
            <button style={{marginLeft: 8}} onClick={updateName}>Change name</button>
            <button style={{marginLeft: 8}} onClick={updateAge}>Change age</button>
            <Normal name={value.name} age={value.age} />
            <Memoized name={value.name} age={value.age} />
        </div>
    );
};

export default Memo;