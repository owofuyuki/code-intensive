const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;