const Input = props => {
    
    const {field} = props
    return (
        <div>
            <p>Text</p>
            <input
                type={field.input_type}
            />
        </div>
    )
}

export default Input