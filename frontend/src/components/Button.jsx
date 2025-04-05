const Button = ({ text, onClick, className }) => {
    return ( <
        button onClick = { onClick }
        className = { `bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition ${className}` } >
        { text } <
        /button>
    );
};

export default Button;