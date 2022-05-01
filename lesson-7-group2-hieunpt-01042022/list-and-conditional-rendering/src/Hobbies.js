import { useState } from "react";

const Hobbies = () => {
    const [hobbies, setHobbies] = useState([
        {id: 1, hobby: '🛌🏼'},
        {id: 2, hobby: '💻'},
        {id: 3, hobby: '📸'},
    ]);

    const handleDelete = (id) => {
        const updatedHobbies = hobbies.filter((item) => {
            return item.id !== id;
        });
        setHobbies(updatedHobbies);
    };

    return (
        <div>
            <h1>Rate your hobbies</h1>
            <ul>
                {hobbies.map((item, idx) => {
                    return (
                        <li key={item.id}>
                            <span>I </span>
                            <select>
                                <option>like</option>
                                <option>love</option>
                            </select>
                            <span> {item.hobby} </span>
                            <button onClick={() => handleDelete(item.id)}>X</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Hobbies;