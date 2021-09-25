const Number = props => {
    
    const {field} = props
    
    return (
        <div>
            <p>Number</p>
            <input
                type={field.input_type}
            />
        </div>
    )
}

export default Number