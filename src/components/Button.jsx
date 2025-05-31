function Button(props) {
    return (
        <button
        {...props}
            className="bg-slate-400 p-2 rounded-md text-white hover:bg-slate-500 transition-colors duration-200">
            {props.children}
        </button>
        )
}

export default Button;