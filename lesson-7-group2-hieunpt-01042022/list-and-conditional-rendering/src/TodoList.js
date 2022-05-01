import { useState } from 'react';

const TodoList = () => {
    const [todoItems, setTodoItems] = useState(["Homework", "Shopping"]);
    console.log(todoItems);

    const onAddClick = () => {
        setTodoItems([...todoItems, "New todo item"]);
    };

    // Chỉ JSX có thể render mảng chứa thẻ
    // const todoItemList = todoItems.map((item) => {
    //     return (<li>{item}</li>);
    // });

    return (
        <div>
            <button onClick={onAddClick}>Add</button>
            <ul>
                {/* 
                <li>{todoItems[0]}</li>
                <li>{todoItems[1]}</li>
                --> Hard-coded
                */}

                {/* 
                {[<li>{todoItems[0]}</li>, <li>{todoItems[1]}</li>]}
                --> Use array but still hard-coded
                */}

                {/* Simplify */}

                {todoItems.map((item) => { return (<li>{item}</li>); })}
            </ul>
        </div>
    );
};

export default TodoList;