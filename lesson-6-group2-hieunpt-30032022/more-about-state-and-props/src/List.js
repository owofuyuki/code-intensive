import { useState } from "react";
import ListItem from "./ListItem";

const List = () => {
    const [task1, setTask1] = useState({ value: "Homework", done: false });
    const [task2, setTask2] = useState({ value: "Buy milk", done: false });

    const notDoneTask = [task1, task2].filter(task => !task.done);

    const setDoneTask1 = () => {
        setTask1({
            ...task1,
            done: true,
        });
    };

    const setDoneTask2 = () => {
        setTask2({
            ...task2,
            done: true,
        });
    };

    return (
        <div>
            <ListItem value={task1.value} done={task1.done} onClick={setDoneTask1} />
            <ListItem value={task2.value} done={task2.done} onClick={setDoneTask2} />
            <div>Total left: {notDoneTask.length}</div>
        </div>
    );
};

// Muốn chia sẻ dữ liệu giữa các components thì tìm đến ancestor chung của chúng

export default List;