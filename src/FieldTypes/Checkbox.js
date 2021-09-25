const Checkbox = props => {

    const {field} = props
    
    return (
        <div>
            <p>Checkbox</p>
            <input
                type={field.input_type}
            />
        </div>
    )
}

export default Checkbox