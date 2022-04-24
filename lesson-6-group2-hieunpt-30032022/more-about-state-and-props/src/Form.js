import { useState } from "react"

const Form = () => {
    const [input, setInput] = useState("Enter your idea...");

    const handleSubmit = (event) => {
        event.preventDefault();
        setInput("");
    };

    const handleInputChanged = (event) => {
        setInput(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleInputChanged} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;